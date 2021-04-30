// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level
let path = "data/mhp.csv";
let markers = L.featureGroup();
let marker1 = L.featureGroup();
let marker2 = L.featureGroup();
let marker3 = L.featureGroup();
let marker4 = L.featureGroup();
let marker5 = L.featureGroup();
let marker6 = L.featureGroup();
let marker7 = L.featureGroup();
let marker8 = L.featureGroup();


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
        radius: 3,
        weight : 1,
        color : 'red',
        fillColor: 'red',
        fillOpacity: 1,
    }
    var polygon = L.polygon([
        [34.835595, -118.933704], //gorman
        [34.713357, -117.744007], // redman
        [34.530240, -117.728638],
        [34.172154, -117.728309],
        [34.403302, -118.434513],
        [34.573184, -118.255588],
        [34.835595, -118.933704]
    ]).addTo(map);
    polygon.bindPopup("Service Area 1");
    polygon.setStyle({color: '#ADA3A4', fillColor:'#ADA3A4',fillOpacity: 0.5})

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
            marker1.addLayer(marker)
            marker1.addTo(map)
    
    
            // add entry to sidebar by service area
            if (item.SA == SA){
                $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
            }
            
        })
        var polygon = L.polygon([
            [34.835595, -118.933704],
            [34.163440, -118.698429],
            [34.113699, -118.851156],
            [34.130726, -118.609063],
            [34.147776, -118.590523],
            [34.131564, -118.350601],
            [34.122626, -118.254928],
            [34.202783, -118.188346],
            [34.257925, -118.000696],
            [34.403302, -118.434513],
            [34.573184, -118.255588],
            [34.835595, -118.933704]
        ]).addTo(map);
        polygon.bindPopup("Service Area 2");
        polygon.setStyle({color:'#9CC0E7' , fillColor: '#9CC0E7', fillOpacity: 0.5})

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
        


        // add entry to sidebar by service area
        if (item.SA == SA2){
            $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
        }
        
    })
    var polygon = L.polygon([
        [34.172154, -117.728309],
        [34.257925, -118.000696],
        [34.202783, -118.188346],
        [34.122626, -118.254928],
        [34.041012, -118.170887],
        [33.954553, -117.916335],
        [33.957502, -117.751629]
        
    ]).addTo(map);
    polygon.bindPopup("Service Area 3");
    polygon.setStyle({color: '#D5C28B', fillColor:'#D5C28B', fillOpacity: 0.5})

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

    var polygon = L.polygon([
        [34.131564, -118.350601],
        [34.134487, -118.400597],
        [34.026573, -118.349474],
        [33.971708, -118.228604],
        [34.041012, -118.170887],
        [34.122626, -118.254928]
        

    ]).addTo(map);
    polygon.bindPopup("Service Area 4");
    
    polygon.setStyle({color: '#E7D6C6', fillColor:'#E7D6C6', fillOpacity: 0.5})
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

    var polygon = L.polygon([
        [34.134487, -118.400597],
        [34.026573, -118.349474],
        [33.966029, -118.355042],
        [33.927518, -118.433549],
        [34.027973, -118.520753],
        [34.041630, -118.568818],
        [34.031388, -118.720224],
        [34.001219, -118.805073],
        [34.113699, -118.851156],
        [34.130726, -118.609063],
        [34.147776, -118.590523]
        

    ]).addTo(map);
    polygon.bindPopup("Service Area 5");
    
    polygon.setStyle({color: '#747884', fillColor:'#747884', fillOpacity: 0.5})
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

    var polygon = L.polygon([
        [33.966029, -118.355042],
        [34.026573, -118.349474], //
        [33.971708, -118.228604], //
        [33.887255, -118.168383],
        [33.888150, -118.275044],
        [33.966029, -118.355042]

    ]).addTo(map);
    polygon.bindPopup("Service Area 6");
    polygon.setStyle({color: '#9BA4A8', fillColor:'#9BA4A8',fillOpacity: 0.5 })

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

    var polygon = L.polygon([
        [33.954553, -117.916335],
        [34.041012, -118.170887],
        [33.971708, -118.228604],
        [33.846114, -118.137942],
        [33.790189, -118.149040],
        [33.790343, -118.179854],
        [33.827645, -118.065406],
        [33.954553, -117.916335]
    ]).addTo(map);
    polygon.bindPopup("Service Area 7");
    polygon.setStyle({color: '#A5A37E', fillColor:'#A5A37E', fillOpacity: 0.5})
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
    var polygon = L.polygon([
        [33.827645, -118.065406],
        [33.746821, -118.108733],
        [33.708940, -118.284789],
        [33.775922, -118.427702],
        [33.830441, -118.389376],
        [33.927518, -118.433549],
        [33.966029, -118.355042],
        [33.888150, -118.275044],
        [33.887255, -118.168383],
        [33.846114, -118.137942],
        [33.801054, -118.145629],
        [33.790158, -118.180224],
        [33.789924, -118.149209],
        [33.801199, -118.147270]

    ]).addTo(map);
    polygon.bindPopup("Service Area 8");
    polygon.setStyle({color: '#D9D0BA', fillColor:'#D9D0BA', fillOpacity: 0.5})

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

    
    let layers = {
        "Marker1": marker1,
        "Marker2": marker2,
        "Marker3": marker3,
        "Marker4": marker4,
        "Marker5": marker5,
        "Marker6": marker6,
        "Marker7": marker7,
        "Marker8": marker8
        
        
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
