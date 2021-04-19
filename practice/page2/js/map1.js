let data = [
    {
        'id' : 0,
        'title':'Antigua y Barbuda',
        'lat': 17.087635,
        'lon': -61.772346,
        'img': 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8ef495f8-541e-4978-8043-99030515acc6.jpg?fit=scale-down&source=next&width=700'
    },
    {
    'id' : 1,
    'title':'Arizona',
    'lat': 34.048927,
    'lon': -111.09373,
      'img': 'https://www.employers.com/wp-content/uploads/hero-arizona.jpg'
    
    },
    {
    'id' : 2,
    'title':'Mexico',
    'lat': 23.634501,
    'lon': -102.552784,
      'img': 'https://www.bakermckenzie.com/-/media/images/locations/mexico.jpg'
    },
    {
    'id' : 3,
    'title':'California',
    'lat': 36.778259,
    'lon': -119.417931,
      'img': 'https://ca-times.brightspotcdn.com/dims4/default/20b69ad/2147483647/strip/true/crop/3000x1999+0+0/resize/1486x990!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F90%2Fca%2F3f5a603a4c6fa7446aa9bf23d25a%2Fla-photos-1staff-528802-me-macarthur-1-rcg.JPG'
    },
    {
    'id' : 4,
    'title':'Nuevo Mexico',
    'lat': 34.307144,
    'lon': -106.018066,
      'img': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/06/new-mexico.jpg?w=1100&h=600&s=1'
    },
    {
    'id' : 5,
    'title':'Texas',
    'lat': 31.0000,
    'lon': -100.00000,
      'img': 'https://robbreport.com/wp-content/uploads/2019/01/austin_1104548120.jpg?w=1000'
    },
    {
    'id' : 6,
    'title':'Nevada',
    'lat': 39.876019,
    'lon': -117.224121,
      'img': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/01/nevada.jpg?w=1100&h=600&s=1'
    },
    {
    'id' : 7,
    'title':'Florida',
    'lat': 27.994402,
    'lon': -81.760254,
      'img': 'https://i1.wp.com/movingtips.wpengine.com/wp-content/uploads/2019/05/miami-fl.jpg?fit=1024%2C684&ssl=1'
    },
    {
    'title':'Utah',
    'lat': 39.419220,
    'lon': -111.950684,
      'img': 'https://blog.newhomesource.com/wp-content/uploads/2020/04/utah.jpg'
    },
    {
    'id' : 8,
    'title':'Colorado',
    'lat': 39.113014,
    'lon': -105.358887,
      'img': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/66/57/4e/maroon-bells.jpg?w=1000&h=600&s=1'
    },
    {
    'id' : 9,
    'title':'Wyoming',
    'lat': 43.075970,
    'lon': -107.290283,
      'img': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/48/a9/71/oxbow-bend-mt-moran.jpg?w=1000&h=600&s=1'
    },
    {
    'id' : 10,
    'title':'Kansas',
    'lat': 38.500000,
    'lon': -98.000000,
      'img': 'https://media2.govtech.com/images/Kansas+City+Missouri.jpg'
    },
    {
    'id' : 11,
    'title':'Oklahoma',
    'lat': 36.084621,
    'lon': -96.921387,
      'img': 'https://cdn2.newsok.biz/cache/large960_blur-fae58e42b23191c822a21289d4d188e8.jpg'
    },
    {
    'id' : 12,
    'title':'Guatemala',
    'lat': 14.628434,
    'lon': -90.522713,
      'img': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Guatemala_City_-_Guatemala.jpg'
    },
    {
    'id' : 13,
    'title':'El Salvador',
    'lat': 13.8030,
    'lon': -88.9053,
      'img': 'https://lp-cms-production.imgix.net/features/2017/11/CerroVerde_elsalvador-e31700e13de1.jpg'
    },
    {
    'id' : 14,
    'title':'Nicaragua',
    'lat': 12.136389,
    'lon': - 86.251389,
      'img': 'http://cdn.cnn.com/cnnnext/dam/assets/171211162657-nicaragua-emerald-coast-mukul-aerial.jpg'
    },
    {
    'id' :15,
    'title':'Honduras',
    'lat': 14.081999,
    'lon': -87.202438,
      'img': 'https://www.planetware.com/wpimages/2020/02/honduras-in-pictures-beautiful-places-to-photograph-roatan-bay-islands.jpg'
    },
    {
    'id' :16,
    'title':'Costa Rica',
    'lat': 9.934739,
    'lon': - 84.087502,
      'img': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/ea/a5/caption.jpg?w=1000&h=600&s=1'
    },
    {
    'id' :17,
    'title':'Louisiana',
    'lat': 30.391830,
    'lon': -92.329102,
      'img': 'https://3dq1fq1lesjd1aw5045f5a6h-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/louisiana-hero.jpg'
    },
    {
    'id' :18,
    'title':'Arkansas',
    'lat': 34.799999,
    'lon': -92.199997,
      'img': 'https://cdn.britannica.com/80/78380-050-85D6E1C5/waterfall-Ozark-Mountains-Arkansas.jpg'
    },
    {
    'id' :19,
    'title':'Nebraska',
    'lat': 41.500000,
    'lon': -100.000000,
      'img': 'https://www.usnews.com/dims4/USNEWS/ee46619/2147483647/thumbnail/1000x468/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F56%2Ffe%2F4f1336d247a5af51932b156a0b5b%2Fbs21-nebraska-profile.jpg'
    },
    {
    'id' :20,
    'title':'North Dakota',
    'lat': 47.650589,
    'lon': -100.437012,
      'img': 'https://www.planetware.com/wpimages/2019/07/north-dakota-in-pictures-most-beautiful-places-to-visit-theodore-roosevelt-national-park.jpg'
    },
    {
    'id' :21,
    'title':'South Dakota',
    'lat': 44.500000,
    'lon': -100.000000,
      'img': 'https://media.beam.usnews.com/cf/81/cdd1863e4dab9015f93438d25bd2/191024bs10thingssd-editorial.jpg'
    },
    {
    'id' :22,
    'title':'Montana',
    'lat': 46.965260,
    'lon': -109.533691,
      'img': 'https://cdn.britannica.com/21/102121-050-DCA84B12/Mountains-Glacier-National-Park-Montana.jpg'
    },
    {
    'id' :23,
    'title':'Idaho',
    'lat': 44.068203,
    'lon': -114.742043,
      'img': 'https://media.beam.usnews.com/83/e4/a443e41d4415b8e85b01ac3f4829/180227bs.idaho.jpg'
    },
    {
    'id' : 24,
    'title':'Minnesota',
    'lat': 46.392410,
    'lon': -94.636230,
      'img': 'https://www.uschamber.com/sites/default/files/styles/article_gallery/public/articles/images/gettyimages-1008004582.jpg?itok=wbFXM2GR'
    },
    {
    'id' :25,
    'title':'Missouri',
    'lat': 38.573936,
    'lon': -92.603760,
      'img': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fa/f4/missouri.jpg?w=1100&h=600&s=1'
    },
    {
    'id' :26,
    'title':'Iowa',
    'lat': 41.619549,
    'lon': - 93.598022,
      'img': 'https://governor.iowa.gov/sites/default/files/styles/homepage_priorities/public/2020-01/iowa_field.jpg?h=5fce77a7&itok=xkagE3wv'
    },
    {
    'id' :27,
    'title':'Venezuela',
    'lat': 10.500000,
    'lon': - 66.916664,
      'img': 'https://www.planetware.com/photos-large/VEN/venezuela-angel-falls-morning-view.jpg'
    },
    {
    'id' :28,
    'title':'Guyana',
    'lat': 6.8045,
    'lon': -58.1553,
      'img': 'https://www.caribjournal.com/wp-content/uploads/2019/12/guyana-tourism-cover.jpg'
    },
    {
    'id' :29,
    'title':'Trinidad y Tobago',
    'lat': 10.536421,
    'lon': -61.311951,
      'img': 'https://www.planetware.com/photos-large/TRI/trinidad-and-tobago-trinidad-maracas-bay.jpg'
    },
    {
    'id' :30,
    'title':'Colombia',
    'lat': 4.624335,
    'lon': -74.063644,
      'img': 'https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/travelagentcentral/1543343625/medellin-colombia-credit-DC_Colombia-iStock-Getty-Images-Plus-Getty-Images_0.jpg/medellin-colombia-credit-DC_Colombia-iStock-Getty-Images-Plus-Getty-Images_0.jpg?6DcdWp0qDDc0NIvnd5uKdLLKrtvdmQ0O&itok=2yiqcnUj'
    },
    {
    'id' :31,
    'title':'Panama',
    'lat': 8.983333,
    'lon': - 79.516670,
      'img': 'http://wanderingtrader.com/wp-content/uploads/2017/01/best-things-to-do-in-panama.jpg'
    },
    {
    'id' :32,
    'title':'Ecuador',
    'lat': -0.180653,
    'lon': -78.467834,
      'img': 'https://www.planetware.com/wpimages/2020/01/ecuador-in-pictures-beautiful-places-to-photograph-quito.jpg'
    },
    {
    'id' :33,
    'title':'Peru',
    'lat': -12.046374,
    'lon': -77.042793,
      'img': 'https://www.peru.travel/Contenido/AcercaDePeru/Imagen/en/6/0.0/Principal/Machu%20Picchu.jpg'
    },
    {
    'id' :34,
    'title':'Bolivia',
    'lat': -17.413977,
    'lon': - 66.165321,
      'img': 'https://humboldttravel.co.uk/wp-content/uploads/2019/09/RSZ-LagunaColorado.jpg'
    },
    {
    'id' :35,
    'title':'Chile',
    'lat': -33.447487,
    'lon': -70.673676,
      'img': 'https://www.state.gov/wp-content/uploads/2019/04/Chile-e1556024428830-2496x1406.jpg'
    },
    {
    'id' :36,
    'title':'Brazil',
    'lat': -23.533773,
    'lon': - 46.625290,
      'img': 'https://noticias.mapfre.com/inc/uploads/2020/05/800-x-472-BrasilpostCovid.png'
    },
    {
    'id' :37,
    'title':'Argetina',
    'lat': -34.603722,
    'lon': -58.381592,
      'img': 'https://imgproxy.natucate.com/sayMKU11G9M0JXoou1UJLSKnF04qQ5SRpA6jfKS2epU/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvMTM2ZGMwNjYtYjcwZC00NjhkLTk3ZmQtMDJhMDYwZTEyNzQyLzExNjQ2ODgyNDItMTU1OTY1ODkxMi9hcmdlbnRpbmllbi1sYWVuZGVyaW5mb3JtYXRpb25lbi1nbGV0c2NoZXItcGVyaXRvLW1vcmVuby1uYXR1Y2F0ZS5qcGc'
    },
    {
    'id' :38,
    'title':'Uruguay',
    'lat': -34.901112,
    'lon': -56.164532,
      'img': 'https://content.unops.org/photos/Generic/Impact/_image2880x1400/Uruguay-GettyImages-878008222.jpg?mtime=20180412105251'
    },
    {
    'id' :39,
    'title':'Paraguay',
    'lat': -25.3007,
    'lon': -57.6359,
      'img': 'https://www.state.gov/wp-content/uploads/2019/04/Paraguay-e1556104047265-2500x1406.jpg'
    },
    {
    'id' :41,
    'title':'Cuba',
    'lat': 23.113592,
    'lon': -82.366592,
      'img': 'https://www.state.gov/wp-content/uploads/2019/04/Cuba-e1556040683458-2500x1406.jpg'
    },
    {
    'id' :42,
    'title':'Puerto Rico',
    'lat': 18.46633000,
    'lon': -66.10572000,
      'img': 'https://rccl-h.assetsadobe.com/is/image/content/dam/royal/ports-and-destinations/destinations/puerto-rico/puerto-rico-san-juan-aerial.jpg?$750x667$'
    },
    {
    'id' : 43,
    'title':'Dominican Republic',
    'lat': 18.483402,
    'lon': -69.929611,
      'img': 'https://lp-cms-production.imgix.net/2019-06/69784245.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312'
    },
    {
    'id' :44,
    'title':'Bahamas',
    'lat': 25.025885,
    'lon': -78.035889,
      'img': 'https://e291f1206726d700191b-d0cedd1cc05016668dc83bc2742129e5.ssl.cf1.rackcdn.com/windsong/media/photo-intro-5fbfa58f5f0cf.jpg'
    },
    {
    'id' :45,
    'title':'Trinidad y Tobago',
    'lat': 10.536421,
    'lon': -61.311951,
      'img': 'https://static.dw.com/image/38114126_401.jpg'
    },
    {
    'id' :46,
    'title':'Grenada',
    'lat': 12.104818,
    'lon': -61.670761,
      'img': 'https://www.state.gov/wp-content/uploads/2019/04/Grenada-e1556100576970-2500x1406.jpg'
    },
    {
    'id' :47,
    'title':'Jamaica',
    'lat': 18.1155,
    'lon': -77.2760,
      'img': 'https://www.planetware.com/wpimages/2019/10/jamaica-best-time-to-visit-best-time-year-to-visit.jpg'
    },
    {
    'id' :48, 
    'title':'Santa Lucia',
    'lat': 13.909444,
    'lon': -60.978893,
      'img': 'https://www.planetware.com/photos-large/STL/st-lucia-beach-and-piton-2.jpg'
    },
    {
    'id' :49,
    'title':'Saint Kitts and Nevis',
    'lat': 17.11667,
    'lon': -62.84858,
      'img': 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/4fca6ab4-b8b3-9dd3-ea55-fa0713e2a8fc/630x355.jpg'
    },
    {
    'id' :50,
    'title':'Dominica',
    'lat': 15.4239,
    'lon': -61.3601,
      'img': 'https://www.planetware.com/photos-large/DMN/dominica-waterfall.jpg'
    },
    {
    'id' :51,
    'title':'Barbados',
    'lat': 13.193887,
    'lon': -59.543198,
      'img': 'https://miro.medium.com/max/5132/1*cQZhys1PMCiH2mJzqOSHTA.jpeg'
    },
    {
      'id' :52,
      'title':'Spain',
      'lat': 40.416775,
      'lon': -3.703790,
        'img': 'https://www.realmofhistory.com/wp-content/uploads/2018/07/facts_spanish_conquistadors-min.jpg'
      }
    ]

    var greyIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
      });

let map = L.map('map').setView([0,0], 20);



L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);


//create feature group
let myMarkers = L.featureGroup();



// loop through data
data.forEach(function(item, index){
    let marker = L.marker([item.lat,item.lon], {icon: greyIcon})
        .bindPopup(`<div>${item.title}</div>
        <img src="${item.img}" width = 100%> 
        `)
        

    myMarkers.addLayer(marker)

    $('.sidebar').append(`<div class= "sidebar-item" 
    onclick="flyToIndex(${index})">${item.title}</div>`)

});



function flyToIndex(index){
    map.flyTo([data[index].lat, data[index].lon], 12)
}



myMarkers.addTo(map)


// Polyline
let myLine = L.featureGroup();

// loop data
data.forEach(function(item, index){
  var latlngs = [
  [[item.lat, item.lon],
   [40.416775, -3.703790]] // Spain coordinates
];

    

  var polyline = L.polyline(latlngs, {color:"grey", weight: 1, smoothFactor: 1 }).addTo(map);
    myLine.addLayer(polyline)
    myLine.addTo(map) 

// zoom the map to the polyline
  map.fitBounds(polyline.getBounds());


});

// define layers
let layers = {
  "Markers": myMarkers,
  "Lines": myLine 
  
  
}

// add layer control box

L.control.layers(null, layers).addTo(map);

map.fitBounds(myMarkers.getBounds())

function flyToIndex(index){
    map.flyTo([data[index].lat,data[index].lon],12)
    myMarkers.getLayers()[index].openPopup()
}


