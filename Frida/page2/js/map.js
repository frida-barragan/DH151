// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3; //zoom level
let path = "data/mhp.csv";
var marker = new L.featureGroup();
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
                .on('mouseover',function(){
                    this.bindPopup(`<b><p align = "center">${item.Name} </b></p>  ${item['description']}`).openPopup()
                    
                })
                


                
                

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
                            
                            
                            
                    
                $('.sidebar').append(`<div class= "sidebar-item" 
                <center> ${item.Name} <br></center></div>`)
                 }
            
        )
       
             // append the layers into a control box    
             map.fitBounds(fg1.getBounds());
                             

