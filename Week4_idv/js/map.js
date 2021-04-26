// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level
let path = "data/mh_rawdata.csv";
let markers = L.featureGroup();


// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
    readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
}

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});
}

function mapCSV(data){
    let circleOptions = {
        radius: 5,
        weight : 1,
        color : 'orange',
        fillColor: 'orange',
        fillOpacity: 1,
    }
	
	// loop through each entry
	data.data.forEach(function(item,index){
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude],circleOptions)
		.on('mouseover',function(){
			this.bindPopup(`<p align = "center" > <b>${item.title}</b><br>${item.percent}</p>`).openPopup()
		})

		// add marker to featuregroup
		markers.addLayer(marker)

		// add entry to sidebar
		$('.sidebar').append(`<div class= "sidebar-item" onmouseover="panTocircleMarker(${index})"> <center><br> ${item.title} <br></center></div>`)
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit map to markers
	map.fitBounds(markers.getBounds())
}
function panTocircleMarker(index){
	// zoom to level 17 first
	map.setZoom(13);
	// pan to the marker
	map.panTo(markers.getLayers()[index]._latlng).openPopup();

	
}
