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

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data on the Percent of Adults (Ages 18 Years and Older) Who Reported Difficulty in Obtaining Needed Medical Care
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
        color : 'black',
        fillColor: 'black',
        fillOpacity: 0.5,
    }

	
	// loop through each entry on the Percent of Adults (Ages 18 Years and Older) Who Reported Difficulty in Obtaining Needed Medical Care
	data.data.forEach(function(item,index){
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude],circleOptions)
		.on('mouseover',function(){
			this.bindPopup(`${item.title}<br>${item.percent}`).openPopup()

		

		})

		// add marker to featuregroup on the Percent of Adults (Ages 18 Years and Older) Who Reported Difficulty in Obtaining Needed Medical Care
		markers.addLayer(marker)
		$('.sidebar').append(`<div class= "sidebar-item" 
    	onclick="flyToIndex(${index})"><center>${item.title}</center></div>`)
	})

	// add featuregroup to map
	markers.addTo(map)
	// markers on the Percent of Adults (Ages 18 Years and Older) Who Reported Difficulty in Obtaining Needed Medical Care.
	let layers = {
		"Percent of Adults (Ages 18 Years and Older) Who Reported Difficulty in Obtaining Needed Medical Care": markers
		
	}
	


	// fit map to markers
	map.fitBounds(markers.getBounds())
}


function flyToIndex(index){
    map.flyTo([data[index].latitude,data[index].longitude],12)
    myMarkers.getLayers()[index].openPopup()
}




function flyToIndex(index){
    map.flyTo([data[index].latitude,data[index].longitude],12)
    myMarkers.getLayers()[index].openPopup()
}