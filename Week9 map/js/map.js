
// Global variables
let map;
let lat = 34.05078 ;
let lon = -118.24145;
let zl = 10; //zoom level
let path1 = "data/mental.csv";
let path = '';
let markers = L.featureGroup();
let geojsonPath= 'data/zipsinfo.geo.json';
let geojson_data= L.tileLayer;
let geojson_layer;
let brew = new classyBrew();
let fieldtomap;
let legend = L.control({position: 'bottomright'});
let info_panel = L.control();
let csvdata;
let mapSlider = $(".js-range-slider").data("ionRangeSlider"); //Save slider instance to var. Should I do this here or down below the function?
let topPrograms;
let positron;
let positronLabels;
// layers to toggle between
var overlays= {
	"Program Locations" : markers
};
//var baseLayers= {
	// add layer for each different choropleth variable, making sure they can't layer on top of each other
	//"Basemap": positron,
	//"Labels" : positronLabels
//};

let map_variables = [
	{
		text: 'Number of facilities',
		id: 'programs',
	},
	{
		text: 'Percent Black',
		id: 'pctblack',
	},
	{
		text: 'Percent Latinx',
		id: 'pctlatinx',
	},
	{
		text: 'Percent Asian',
		id: 'pctasian',
	},
	{
		text: 'Percent White',
		id: 'pctwhite',
	},
	{
		text: 'Percent Native American',
		id: 'pctnative',
	},
	{
		text: 'Percent Pacific Islander',
		id: 'pctislander',
	},
]
	

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	getGeoJSON();
    readCSV(path1);
	createSlider()
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
        color : 'black',
        fillColor: '#046582',
        fillOpacity: 1,
    }

	// add layer control box
	L.control.layers(null,overlays).addTo(map)
	
	// loop through each entry
	csvdata.data.forEach(function(item,index){
		// create a marker
		var marker = L.circleMarker([item.latitude,item.longitude], circleOptions)
			.bindPopup(`<b><p align= "center">${item.name1}</b>
			<br>${item.street1},
			<br>${item.city} ${item.zip}
			<br>${item.website}<br>
			<br><b>Forms of payment accepted:</b><br>
			${item.mc == "1" ? ("Medicare"): 
			(stop = "")}<br>
			${item.md == "1" ? ("Medicaid"): 
			(stop = "")}<br>
			${item.mi == "1" ? ("Military insurance"): 
			(stop = "")}<br>
			${item.pi == "1" ? ("Private health insurance"): 
			(stop = "")}<br>
			${item.sf == "1" ? ("Cash or self-payment"): 
			(stop = "")}<br>
			
			</p>`
			);

		let isClicked= false	
		
		marker.on({
			mouseover: function(){
				if(!isClicked){
					this.openPopup()
				}
			},
			mouseout: function(){
				if(!isClicked){
					this.closePopup()
				}
			},
			click: function(){
				isClicked= true
				this.openPopup();
			}
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
		mapGeoJSON('programs', 8, 'PuBuGn', 'equal_interval') //add a field to be used
	
		//call create slider function
		createSlider();	

	})
}

function createSlider(){
	$(".js-range-slider").ionRangeSlider({
		type: "single",
		min: 0,
		max: 8,
		from: 0, 
		grid: true,
		keyboard: true,

		onStart: function (data){
			console.log(data.input);
			console.log(data.slider);
		
		},

		onChange: function (data){
	
			console.log(data.from);
			
			mapPrograms(data.from)
		}
	});

}

function mapPrograms(num){
	console.log('mapping zip codes with '+num ,'or more programs') //usiing "num" from the data in the slider
	// clearing layers so they don't build on top of one another with each change of the slider
	if(topPrograms){
		topPrograms.clearLayers()
	}
	// filtering and styling layer of number of programs
	topPrograms= L.geoJSON(geojson_data, {
		style: {
			color: '#ed5565',
			weight: 2,
			fill: false
		},
		filter:function(item){if(item.properties.programs>=num)return true}
	}).addTo(map)
}


// function to map a geojson file and style it with choropleth
function mapGeoJSON(field, num_class, color, scheme){

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
	brew.setColorCode(color);
	brew.classify(scheme);

	// create the layer and add to map
	geojson_layer = L.geoJson(geojson_data, {
		style: getStyle, //call a function to style each feature
		onEachFeature: onEachFeature // actions on each feature
	}).addTo(map);

	// bring geojson layer to back
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
		weight: 3,
		color: '#cbcbcb',
		fillColor: brew.getColorInRange(layer.feature.properties[fieldtomap]),
		fillOpacity: .9
	});
	
	info_panel.update(layer.feature.properties);

	createDashboard(layer.feature.properties)
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

			this._div.innerHTML =`<b>Zip Code ${properties.zipcode}</b><br>${fieldtomap}: ${properties[fieldtomap]}`;
			
			
			;
			
		}
		// if feature is not highlighted
		else
		{
			this._div.innerHTML = 'Hover over the map';
		}
	};

	info_panel.addTo(map);
}

// style each feature
function getStyle(feature){
	return {
		stroke: .005,
		color: '#cbcbcb',
		weight: 1,
		fill: true,
		fillColor: brew.getColorInRange(feature.properties[fieldtomap]),
		fillOpacity: 1
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

function createDashboard(properties){

	// clear dashboard
	$('.dashboard').empty();

	//output in console to make sure it's working
	console.log(properties)

	// chart title
	let title = 'Zip Code ' + properties.zipcode;

	// data values
	let data = [
		properties.pctblack,
		properties.pctlatinx,
		properties.pctasian,
		properties.pctwhite,
		properties.pctnative,
		properties.pctislander,
	];

	// data fields
	let fields = [
		'% Black',
		'% Latinx',
		'% Asian',
		'% White',
		'% Natve American',
		'% Pacific Islander',
	];

	// set chart options
	let options = {
		chart: {
			type: 'bar',
			height: 300,
			animations: {
				enabled: false,
			}
		},
		title: {
			text: title,
		},
		plotOptions: {
			bar: {
				horizontal: true
			}
		},
		series: [
			{
				data: data
			}
		],
		xaxis: {
			categories: fields
		}
	}
	
	// create the chart
	let chart = new ApexCharts(document.querySelector('.dashboard'), options)
	chart.render()
}


// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	var positron= L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd',
		maxZoom: 19
	}).addTo(map)	

	

	//L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
		//attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		//subdomains: 'abcd',
		//maxZoom: 19
	//}).addTo(map)
	
	//var Stamen_TonerLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}', {
		//attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>',
		//subdomains: 'abcd',
		//minZoom: 0,
		//maxZoom: 20,
		//ext: 'png'
	//}).addTo(map)	

	// put labels on top of geoJSON map
	map.createPane('labels').style.zIndex = 650;
	//make sure those labels don't capture clicks and touches
	map.getPane('labels').style.pointerEvents = 'none';
		
	let positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
			// attribution: cartodbAttribution,
		pane: 'labels'
	}).addTo(map);

}