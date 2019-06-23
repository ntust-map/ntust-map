//Layer group init
var all_activity_group = L.layerGroup();
var seminar_group = L.layerGroup();
var club_group = L.layerGroup();
var workshop_group = L.layerGroup();
var competition_group = L.layerGroup();
var lecture_group = L.layerGroup();
var exhibition_group = L.layerGroup();
var conference_group = L.layerGroup();

var tr_group = L.layerGroup();
var e1_group = L.layerGroup();
var ma_group = L.layerGroup();
var ib_group = L.layerGroup();
var ad_group = L.layerGroup();
var gym_group = L.layerGroup();

//Add building marker to layer group
L.marker([25.01304,121.54013]).bindPopup("<strong>模擬聯合國社課</strong><br>地點：IB-303").addTo(ib_group).addTo(club_group).addTo(all_activity_group);
L.marker([25.01278,121.54030]).bindPopup("<strong>宇宙學研討會</strong><br>地點：IB-102").addTo(ib_group).addTo(seminar_group).addTo(all_activity_group);
L.marker([25.01326,121.54031]).bindPopup("<strong>期末設計展</strong><br>地點：IB-101").addTo(ib_group).addTo(exhibition_group).addTo(all_activity_group);

L.marker([25.01505,121.54280]).bindPopup("<strong>研揚大樓</strong>").addTo(tr_group).addTo(all_activity_group);

var activityMarkers = {
    "所有活動": all_activity_group,
    "研討會": seminar_group,
    "社團": club_group,
    "工作坊": workshop_group,
    "競賽": competition_group,
    "演講": lecture_group,
    "展覽": exhibition_group,
    "會議": conference_group,
};

//Overlay menu init, including layer group
var placeMarkers = {
    "研揚大樓(TR)": tr_group,
    "工程一館(E1)": e1_group,
    "管理大樓(MA)": ma_group,
    "國際大樓(IB)": ib_group,
    "行政大樓(AD)": ad_group,
    "體育館": gym_group,
};

//Map init
var ntust_map = L.map('ntustmap', {layers: [all_activity_group, ib_group, tr_group]}).setView([25.0134707,121.5419075], 18).locate({setView: true});

//Display tile layers on the map with OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '<a href="https://www.openstreetmap.org/">OSM</a>', maxZoom: 19}).addTo(ntust_map);

//Add overlay menu to map
//layers(base layers object, overlays object)
//          radioboxes          checkboxes 
L.control.layers(activityMarkers, placeMarkers).addTo(ntust_map);

//GPS location
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(ntust_map).openPopup();
    L.circle(e.latlng, radius, {fillOpacity: 0.1}).addTo(ntust_map);
}
ntust_map.on('locationfound', onLocationFound);
