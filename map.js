//Layer group init
var ib_group = L.layerGroup();
var tr_group = L.layerGroup();

//Add building marker to layer group
L.marker([25.01304,121.54013]).bindPopup("<strong>國際大樓</strong>").addTo(ib_group);
L.marker([25.01505,121.54280]).bindPopup("<strong>研揚大樓</strong>").addTo(tr_group);

//Overlay menu init, including layer group
var overlayMarkers = {
    "國際大樓(IB)": ib_group,
    "研揚大樓(TR)": tr_group
};

//Map init
var ntust_map = L.map('ntustmap', {layers: [ib_group, tr_group]}).setView([25.0134707,121.5419075], 18).locate({setView: true});

//Display tile layers on the map with OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '<a href="https://www.openstreetmap.org/">OSM</a>', maxZoom: 19}).addTo(ntust_map);

//Add overlay menu to map
//layers(base layers object, overlays object)
//          radioboxes          checkboxes 
L.control.layers(null, overlayMarkers).addTo(ntust_map);

//GPS location
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(ntust_map).openPopup();
    L.circle(e.latlng, radius, {fillOpacity: 0.1}).addTo(ntust_map);
}
ntust_map.on('locationfound', onLocationFound);
