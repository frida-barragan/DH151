// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level
let path = "data/mhp.csv";
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
        color : 'white',
        fillColor: 'red',
        fillOpacity: 1,
    }

	var SA = "SA1";
    $('.sidebar').append(`<div class= "SA1"> <b> Service Area 1 </b></div>`)
    // loop through each entry
        data.data.forEach(function(item,index){
            // create a marker
            let marker = L.circleMarker([item.latitude,item.longitude], circleOptions)
            .on('mouseover',function(){
                this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
            })
    
            // add marker to featuregroup
            markers.addLayer(marker)
    
    
            // add entry to sidebar by service area
            if (item.SA == SA){
                $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
            }
            
        })

    var SA2 = "SA2";
    $('.sidebar').append(`<div class= "SA2"> <b> Service Area 2 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA2){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    let SA3 = "SA3";
    $('.sidebar').append(`<div class= "SA3"> <b> Service Area 3 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA3){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    let SA4 = "SA4";
    $('.sidebar').append(`<div class= "SA4"> <b> Service Area 4 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA4){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    let SA5 = "SA5";
    $('.sidebar').append(`<div class= "SA5"> <b> Service Area 5 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA5){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    let SA6 = "SA6";
    $('.sidebar').append(`<div class= "SA6"> <b> Service Area 6 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA6){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    let SA7 = "SA7";
    $('.sidebar').append(`<div class= "SA7"> <b> Service Area 7 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA7){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    let SA8 = "SA8";
    $('.sidebar').append(`<div class= "SA8"> <b> Service Area 8 </b></div>`)
    // loop through each entry
    data.data.forEach(function(item,index){
        // create a marker
        let marker = L.circleMarker([item.latitude,item.longitude])
        .on('mouseover',function(){
            this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
        })

        // add marker to featuregroup
        markers.addLayer(marker)


        // add entry to sidebar by service area
        if (item.SA == SA8){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    
// add featuregroup to map
	markers.addTo(map)
    
    let layers = {
        "Markers": markers,
    }
    L.control.layers(null, layers).addTo(map);

	// fit map to markers
	map.fitBounds(markers.getBounds())
}
function panToImage(index){
	// zoom to level 17 first
	map.setZoom(17);
	// pan to the marker
	map.panTo(markers.getLayers()[index]._latlng);
}
