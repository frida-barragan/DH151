// Global variables
let map;
let lat = 34.278159072185794;
let lon = -118.23323;
let zl = 8;
let path = '';
let path2 = "data/mhpdone.csv";
let csvdata;
var marker = L.featureGroup();
let layers ={
	"Mental Health Services" : marker
}

// put this in global variables
let geojsonPath= 'data/progsinzips.geo.json';
let geojson_data;
let geojson_layer;

// for choropleth colors
let brew = new classyBrew();
let fieldtomap;

// for legend
let legend = L.control({position: 'bottomright'});

// info panel, default is topright
let info_panel = L.control();

// initialize choropleth
$( document ).ready(function() {
    createMap(lat,lon,zl);
	// call the function to grab the data
	getGeoJSON();
	
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);
	L.tileLayer.provider('Jawg', {
		variant: 'jawg-dark',
		accessToken: 'fLAohCU6p7WMdLTK7u03VkhqqLcrHeGIvdySTS5AsDRfN49NEMTwPPiDd0TWTjGP'
	}).addTo(map)	
}
// function to read csv data
function readCSV(path2){
	Papa.parse(path2, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			csvdata = "data/mhp.csv" //puts the data into global var
			L.control.layers(null, layers).addTo(map);  
		}
	});
}

let circleOptions1 = {
        radius: 1.5,
        weight : 0.5,
        color : '#046582',
        fillColor: '#046582',
        fillOpacity: 1,
    }
// loop through each entry
csvdata.data.forEach(function(item, index){
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude], circleOptions1)
		marker.addLayer(marker).addTo(map);

	}
)

		
// function to get the geojson data
function getGeoJSON(){

	$.getJSON(geojsonPath,function(data){
		console.log(data)

		// put the data in a global variable
		geojson_data = data;

		// call the map function
		mapGeoJSON('NUMPOINTS', 7) //add a field to be used
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

	//create legend
	createLegend();

	//create info panel
	createInfoPanel();
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

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}

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
			this._div.innerHTML = `<b>${properties.zipcode}</b><br>${fieldtomap}: ${properties[fieldtomap]}`;
		}
		// if feature is not highlighted
		else
		{
			this._div.innerHTML = 'Hover over a zip code';
		}
	};

	info_panel.addTo(map);
}