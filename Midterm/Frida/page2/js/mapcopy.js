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

let url = "https://opendata.arcgis.com/datasets/e9134f735c0c473d8156f4703a687ce9_4.geojson"

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
    
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl
    );

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
}

function getJSON(url){
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data1 =>{
            console.log(data1)
        }
        )}
    
    function mapJSON(data1){
        // loop through each row in the json data
        data1.forEach(function(item, index){
            // create a marker
            let poly = L.polygon([item.latitude,item.longitude])
    
            // add marker to featuregroup
            poly.addLayer(poly);
        })
    
    }
