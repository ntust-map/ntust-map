var ntust_map = L.map('ntustmap').setView([25.0134707,121.5419075], 18).locate({setView: true, watch: true});

//標記所在位置
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(ntust_map).openPopup();
    L.circle(e.latlng, radius, {fillOpacity: 0.1}).addTo(ntust_map);
}
ntust_map.on('locationfound', onLocationFound);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '<a href="https://www.openstreetmap.org/">OSM</a>', maxZoom: 19}).addTo(ntust_map);

var ib_marker = L.marker([25.01304,121.54013]);
ib_marker.addTo(ntust_map);

ib_marker.bindPopup("<strong>國際大樓</strong>").openPopup();