// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level

let path = "data/mhp.csv";
var marker1 = new L.featureGroup();
var marker2 = new L.featureGroup();
var marker3 = new L.featureGroup();
var marker4 = new L.featureGroup();
var marker5 = new L.featureGroup();
var marker6 = new L.featureGroup();
var marker7 = new L.featureGroup();
var marker8 = new L.featureGroup();
let fg1 = L.featureGroup([marker1,marker2,marker3,marker4,marker5,marker6,marker7,marker8]); 
let csvdata;
let sa1_poly = L.polygon([
    [34.835595, -118.933704],
    [34.713357, -117.744007],
    [34.530240, -117.728638],
    [34.172154, -117.728309],
    [34.403302, -118.434513],
    [34.573184, -118.255588],
    [34.835595, -118.933704]
    ]);
let sa2_poly = L.polygon([
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
    ]);
let sa3_poly = L.polygon([
    [34.172154, -117.728309],
    [34.257925, -118.000696],
    [34.202783, -118.188346],
    [34.122626, -118.254928],
    [34.041012, -118.170887],
    [33.954553, -117.916335],
    [33.957502, -117.751629]
    ]);
let sa4_poly = L.polygon([
    [34.131564, -118.350601],
    [34.134487, -118.400597],
    [34.026573, -118.349474],
    [33.971708, -118.228604],
    [34.041012, -118.170887],
    [34.122626, -118.254928]
    ]);
let sa5_poly = L.polygon([
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
    ]);
let sa6_poly = L.polygon([
    [33.966029, -118.355042],
    [34.026573, -118.349474], //
    [33.971708, -118.228604], //
    [33.887255, -118.168383],
    [33.888150, -118.275044],
    [33.966029, -118.355042]
    ]);
let sa7_poly = L.polygon([
    [33.954553, -117.916335],
    [34.041012, -118.170887],
    [33.971708, -118.228604],
    [33.846114, -118.137942],
    [33.790189, -118.149040],
    [33.790343, -118.179854],
    [33.827645, -118.065406],
    [33.954553, -117.916335]
    ]);
let sa8_poly = L.polygon([
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
    ]);

    let layers = {
        "Service Area 1": marker1,
        "Service Area 2": marker2,
        "Service Area 3": marker3,
        "Service Area 4": marker4,
        "Service Area 5": marker5,
        "Service Area 6": marker6,
        "Service Area 7": marker7,
        "Service Area 8": marker8
         } 
// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
    readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl
    );

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
			csvdata = data //puts the data into global var
			mapCSV("SA1",sa1_poly);
            mapCSV("SA2",sa2_poly);
            mapCSV("SA3",sa3_poly);
            mapCSV("SA4",sa4_poly);
            mapCSV("SA5",sa5_poly);
            mapCSV("SA6",sa6_poly);
            mapCSV("SA7",sa7_poly);
            mapCSV("SA8",sa8_poly);

         L.control.layers(null, layers).addTo(map);    
 

		}
	});
}

function mapCSV(SA, poly){

    let circleOptions1 = {
        radius: 3,
        weight : 1,
        color : 'white',
        fillColor: 'white',
        fillOpacity: 1,
    }

    // loop through each entry
    
    
        csvdata.data.forEach(function(item, index){

            
        
            if (item.SA == SA){
                poly.addTo(map)
                poly.bindPopup(`${item.SA}`);
                poly.setStyle({color: '#ADA3A4', fillColor:'#ADA3A4',fillOpacity: 0.5})

                // create a marker
                let marker = L.circleMarker([item.latitude,item.longitude], circleOptions1)
                .on('mouseover',function(){
                    this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
                })


                // create a function that will do this without repeated code to add a title for each service area
                if (item.Name == "Residential Program"){
                    $('.sidebar').append('Service Area 1')}
                if (item.Name == "Olive Vista"){
                    $('.sidebar').append('Service Area 2')}
                if (item.Name == "Ingleside Hospital"){
                    $('.sidebar').append('Service Area 3')}
                if (item.Name == "California Hospital Medical Center"){
                    $('.sidebar').append('Service Area 4')}
                if (item.Name == "American Health Services"){
                    $('.sidebar').append('Service Area 5')}
                if (item.Name == "Shields For Families Inc - Eden"){
                    $('.sidebar').append('Service Area 6')}
                if (item.Name == "Lakewood Regional Medical Center"){
                    $('.sidebar').append('Service Area 7')}
                if (item.Name == "Long Beach Memorial Medical Center"){
                    $('.sidebar').append('Service Area 8')}
                

                            //This is where the error occurs that causes 8 control boxes to be created
                // Add the markers as layers into the map (the function we created added all the layers just into marker 1 so the user couldn't toggle service area markers on/off)
                
                    if (item.SA == "SA1"){  
                        marker1.addLayer(marker).addTo(map);
                        }
                    else if (item.SA == "SA2"){
                            marker2.addLayer(marker).addTo(map);
                            }
                    else if (item.SA == "SA3"){
                            marker3.addLayer(marker).addTo(map);
                            }
                    else if (item.SA == "SA4"){
                            marker4.addLayer(marker).addTo(map);
                            }
                    else if (item.SA == "SA5"){
                            marker5.addLayer(marker).addTo(map);
                            }
                    else if (item.SA == "SA6"){
                            marker6.addLayer(marker).addTo(map);
                            }
                    else if (item.SA == "SA7"){
                            marker7.addLayer(marker).addTo(map);
                            }
                    else if(item.SA == "SA8"){
                            marker8.addLayer(marker).addTo(map);
                            }
                    
                $('.sidebar').append(`<div class= "SA"> <center><br> ${item.Name} <br></center></div>`)
                 }
            }   
        )
        //create the different marker layers
        
             // append the layers into a control box    
             map.fitBounds(fg1.getBounds());                
}