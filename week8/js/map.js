// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level
let path = '';
let markers = L.featureGroup();
let geojsondata;
let geojsonlayer;
let brew = new classyBrew();
let fieldtomap;
let legend = L.control({position: 'bottomright'});
let info_panel = L.control();
let jsondata;

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	getJSON()

	
});
// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to get the geojson data
function getJSON(){
	$.getJSON('https://data.lacity.org/resource/2nrs-mtv8.json?$order=date_rptd%20desc',function(data){
		console.log(data)
		jsondata = data;
		mapJSON()
	})
}


function mapJSON(){
    let circleOptions = {
        radius: 1.5,
        weight : 0.5,
        color : '#046582',
        fillColor: '#046582',
        fillOpacity: 1,
    }
	
	// loop through each entry
	jsondata.forEach(function(item,index){
		// create a marker
		let marker = L.circleMarker([item.lat,item.lon], circleOptions)
		

		// add marker to featuregroup
		markers.addLayer(marker)
		markers.bringToFront(markers)


		
	})
	filtered_data = jsondata.filter(item => item.vict_descent === 'B')

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



