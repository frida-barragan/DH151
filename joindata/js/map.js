// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level
let path1 = "data/mental.csv";
let path = '';
let markers = L.featureGroup();
let geojsonPath= 'data/progsinzips.geo.json';
let geojson_data;
let geojson_layer;
let brew = new classyBrew();
let fieldtomap;
let legend = L.control({position: 'bottomright'});
let info_panel = L.control();
let csvdata;

	

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	getGeoJSON();
    readCSV(path1);
	createSidebar();
});

// function to read csv data
function readCSV(path1){
	Papa.parse(path1, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			csvdata = data
			// map the data
			mapCSV(data);
			
			 
		}
	});
}



function mapCSV(csvdata){
    let circleOptions = {
        radius: 1.5,
        weight : 0.5,
        color : '#046582',
        fillColor: '#046582',
        fillOpacity: 1,
    }
	
	// loop through each entry
	csvdata.data.forEach(function(item,index){
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude], circleOptions)
		.on('mouseover',function(){
			this.bindPopup(`<b><p align= "center">${item.name1}</b>
			<br>${item.street1},<br>${item.city} ${item.zip}<br>${item.website}</p>
			
			if (item.sp == "1"){append(`<u>Service ,Area, 8,`)}
			
			
			
			`
			
			).openPopup()
		})

		// add marker to featuregroup
		markers.addLayer(marker)
		markers.bringToFront(markers)

		
	})
	

	// add featuregroup to map
	markers.addTo(map)

	
	

	// fit map to markers
	map.fitBounds(markers.getBounds())
}

function createSidebar(csvdata){
	// Add description text
	$('.sidebar').append(`
	<p>
	The map to the right shows the county of Los Angeles in California distributed by zip code. The user can hover over each zone to get data about the raw count of mental health facilities. The user can also click on the points to get further information about each facility.
	</p>
	`)
}
function addZips(){
	geojson_data.features.forEach(function(item){
		
		$('.sidebar').append(`<p align = "center"><u>${item.properties.zipcode}</p>`)



	})
}


function panToImage(index){
	// zoom to level 17 first
	map.setZoom(17);
	// pan to the marker
	map.panTo(markers.getLayers()[index]._latlng);
}



// function to get the geojson data
function getGeoJSON(){

	$.getJSON(geojsonPath,function(data){
		console.log(data)

		// put the data in a global variable
		geojson_data = data;

		// call the map function
		mapGeoJSON('NUMPOINTS', 9) //add a field to be used
		addZips();
	})
}
// function to map a geojson file and style it with choropleth
function mapGeoJSON(field, num_class){

	// clear layers in case it has been mapped already
	if (geojson_layer){
		geojson_layer.clearLayers()
	}
	
	// globalize the field to map
	fieldtomap = field;

	// create an empty array
	let values = [];


	// based on the provided field, enter each value into the array
	geojson_data.features.forEach(function(item,index){
		values.push(item.properties[field]) //pushing value into empty array
	})
	

	// set up the "brew" options
	brew.setSeries(values);
	brew.setNumClasses(num_class);
	brew.setColorCode('PuBuGn');
	brew.classify('interval');

	// create the layer and add to map
	geojson_layer = L.geoJson(geojson_data, {
		style: getStyle, //call a function to style each feature
		onEachFeature: onEachFeature // actions on each feature
	}).addTo(map);

	// fit to bounds
	map.fitBounds(geojson_layer.getBounds())
	geojson_layer.bringToBack()

	//create legend
	createLegend();

	//create info panel
	createInfoPanel();
}
// Function that defines what will happen on user interactions with each feature

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
		
	});
}
// on mouse over, highlight the feature
function highlightFeature(e) {
	var layer = e.target;

	// style to use on mouse over
	layer.setStyle({
		weight: 2,
		color: '#666',
		fillOpacity: 0.7
	});

	
	
	info_panel.update(layer.feature.properties)
	

	

	

}

// on mouse out, reset the style, otherwise, it will remain highlighted
function resetHighlight(e) {
	geojson_layer.resetStyle(e.target);
	info_panel.update() //resets info panel

}

// on mouse click on a feature, zoom in to it
function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}


function createInfoPanel(){
	


	info_panel.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		this.update();
		return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info_panel.update = function (properties) {
		
		// if feature is highlighted
		if(properties){

			this._div.innerHTML ='The number of facilities in zip code <br>'  + 
			`<b>${properties.zipcode}</b> ` 
			+ ' are: ' 
			+ `<b> ${properties[fieldtomap]}</b>` 
			
			
			;
			
		}
		// if feature is not highlighted
		else
		{
			this._div.innerHTML = 'Discover the mental health services <br> by zip code by hovering over the <br> map.';
		}
	};

	info_panel.addTo(map);
}

// style each feature
function getStyle(feature){
	return {
		stroke: true,
		color: 'white',
		weight: 1,
		fill: true,
		fillColor: brew.getColorInRange(feature.properties[fieldtomap]),
		fillOpacity: 0.8
	}
}

// add legend
function createLegend(){
	legend.onAdd = function (map) {
		var div = L.DomUtil.create('div', 'info legend'),
		breaks = brew.getBreaks(),
		labels = [],
		from, to;
		
		for (var i = 0; i < breaks.length; i++) {
			from = breaks[i];
			to = breaks[i + 1];
			if(to) {
				labels.push(
					'<i style="background:' + brew.getColorInRange(to) + '"></i> ' +
					from.toFixed(2) + ' &ndash; ' + to.toFixed(2));
				}
			}
			
			div.innerHTML = labels.join('<br>');
			return div;
		};
		
		legend.addTo(map);
}


// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

