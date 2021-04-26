// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
let path = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
let markers = L.featureGroup();
let csvdata;
let lastdate;

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

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			csvdata = data;

            lastdate = csvdata.meta.fields[csvdata.meta.fields.length-1];
            createSidebarButtons();
            mapCSV(lastdate)
		}
	});
}
function mapCSV(date){

    markers.clearLayers();

	// loop through every row in the csv data
	csvdata.data.forEach(function(item,index){
		// check to make sure the Latitude column exists
		if(item.Lat != undefined){
            
            let circleOptions = {
				radius: getRadiusSize(item[date]),　// divide by high number to get usable circle sizes
				weight: 1,
				color: 'white',
				fillColor: 'red',
				fillOpacity: 0.5
			}

			// Lat exists, so create a circleMarker for each country
            let marker = L.circleMarker([item.Lat,item.Long], circleOptions)
            .on('mouseover',function(){
                this.bindPopup(`${item['Country/Region']} <br> Confirmed cases on ${date}: ${item[date]}`).openPopup()
            })
			// add the circleMarker to the featuregroup
            {
            markers.addLayer(marker)
            }

		}// end if
	})

	// add the featuregroup to the map
    markers.addTo(map)


	// fit the circleMarkers to the map view
    map.fitBounds(markers.getBounds())
}

function getRadiusSize(value){
    let values = []; 
    // get the min and max
	csvdata.data.forEach(function(item,index){
		if(item[lastdate] != undefined){
			values.push(Number(item[lastdate]))
		}
	})
	let min = Math.min(...values);
	let max = Math.max(...values)
	
	// per pixel if 100 pixel is the max range
	perpixel = max/100;
	return value/perpixel
}
function createSidebarButtons(){

	// put all available dates into an array
	// using slice to remove first 4 columns which are not dates
	let dates = csvdata.meta.fields.slice(4)

	// loop through each date and create a hover-able button
	dates.forEach(function(item,index){
		$('.sidebar').append(`<span onmouseover="mapCSV('${item}')" class="sidebar-item" title="${item}">●</span>`)
	})
}
