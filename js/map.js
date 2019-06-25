//Layer group init
var all_activity_group = L.layerGroup();
var seminar_group = L.layerGroup();
var club_group = L.layerGroup();
var workshop_group = L.layerGroup();
var competition_group = L.layerGroup();
var lecture_group = L.layerGroup();
var exhibition_group = L.layerGroup();
var conference_group = L.layerGroup();

var art_group = L.layerGroup();
var science_group = L.layerGroup();
var it_group = L.layerGroup();
var management_group = L.layerGroup();
var language_group = L.layerGroup();
var leisure_group = L.layerGroup();

var tr_group = L.layerGroup();
var e1_group = L.layerGroup();
var ma_group = L.layerGroup();
var ib_group = L.layerGroup();
var lb_group = L.layerGroup();
var gym_group = L.layerGroup();

//Add building marker to layer group
L.marker([25.01505,121.54280], {icon: L.BeautifyIcon.icon({icon: 'fas fa-space-shuttle', iconShape: 'marker', borderColor: 'green', textColor: 'green'})}).bindPopup("<strong>天文社社課</strong><br>地點：TR頂樓").addTo(tr_group).addTo(club_group).addTo(science_group).addTo(all_activity_group);
L.marker([25.01524,121.54258], {icon: L.BeautifyIcon.icon({icon: 'fas fa-camera-retro', iconShape: 'marker', borderColor: 'blue', textColor: 'blue'})}).bindPopup("<strong>廢墟攝影師演講</strong><br>地點：TR-510").addTo(tr_group).addTo(lecture_group).addTo(art_group).addTo(all_activity_group);
L.marker([25.01491,121.54293], {icon: L.BeautifyIcon.icon({icon: 'fas fa-coffee', iconShape: 'marker', borderColor: 'red', textColor: 'red'})}).bindPopup("<strong>咖啡社奶泡工作坊</strong><br>地點：TR-214").addTo(tr_group).addTo(workshop_group).addTo(leisure_group).addTo(all_activity_group);

L.marker([25.01349,121.54240], {icon: L.BeautifyIcon.icon({icon: 'fas fa-code', iconShape: 'marker', borderColor: 'orange', textColor: 'orange'})}).bindPopup("<strong>EEEI@NTUST</strong><br>地點：E1-101").addTo(e1_group).addTo(conference_group).addTo(it_group).addTo(all_activity_group);
L.marker([25.01330,121.54185], {icon: L.BeautifyIcon.icon({icon: 'fas fa-user-tie', iconShape: 'marker', borderColor: 'blue', textColor: 'blue'})}).bindPopup("<strong>snsV徵才</strong><br>地點：E1-102").addTo(e1_group).addTo(lecture_group).addTo(it_group).addTo(all_activity_group);

L.marker([25.01246,121.54118], {icon: L.BeautifyIcon.icon({icon: 'fas fa-money-check-alt', iconShape: 'marker', borderColor: 'green', textColor: 'green'})}).bindPopup("<strong>證券社社課</strong><br>地點：MA-405").addTo(ma_group).addTo(club_group).addTo(management_group).addTo(all_activity_group);
L.marker([25.01229,121.54138], {icon: L.BeautifyIcon.icon({icon: 'fas fa-language', iconShape: 'marker', borderColor: 'green', textColor: 'green'})}).bindPopup("<strong>韓文社社課</strong><br>地點：MA-302").addTo(ma_group).addTo(club_group).addTo(language_group).addTo(all_activity_group);

L.marker([25.01304,121.54013], {icon: L.BeautifyIcon.icon({icon: 'fas fa-comment-dots', iconShape: 'marker', borderColor: 'green', textColor: 'green'})}).bindPopup("<strong>模擬聯合國社課</strong><br>地點：IB-303").addTo(ib_group).addTo(club_group).addTo(art_group).addTo(all_activity_group);
L.marker([25.01278,121.54030], {icon: L.BeautifyIcon.icon({icon: 'far fa-star', iconShape: 'marker', borderColor: 'purple', textColor: 'purple'})}).bindPopup("<strong>宇宙學研討會</strong><br>地點：IB-102").addTo(ib_group).addTo(seminar_group).addTo(science_group).addTo(all_activity_group);
L.marker([25.01326,121.54031], {icon: L.BeautifyIcon.icon({icon: 'fas fa-paint-roller', iconShape: 'marker', borderColor: 'pink', textColor: 'pink'})}).bindPopup("<strong>期末設計展</strong><br>地點：IB-101").addTo(ib_group).addTo(exhibition_group).addTo(art_group).addTo(all_activity_group);

L.marker([25.01383,121.54130], {icon: L.BeautifyIcon.icon({icon: 'fas fa-book', iconShape: 'marker', borderColor: 'brown', textColor: 'brown'})}).bindPopup("<strong>圖書館地下室密室逃脫</strong><br>地點：LB-002").addTo(lb_group).addTo(competition_group).addTo(leisure_group).addTo(all_activity_group);

L.marker([25.01418,121.54324], {icon: L.BeautifyIcon.icon({icon: 'fas fa-bicycle', iconShape: 'marker', borderColor: 'brown', textColor: 'brown'})}).bindPopup("<strong>腳踏車比慢</strong><br>地點：體育館外").addTo(gym_group).addTo(competition_group).addTo(leisure_group).addTo(all_activity_group);

var activityMarkers = {
    "所有活動": all_activity_group,
    "研討會": seminar_group,
    "社團": club_group,
    "工作坊": workshop_group,
    "競賽": competition_group,
    "演講": lecture_group,
    "展覽": exhibition_group,
    "會議": conference_group,

    "人文藝術": art_group,
    "自然科學": science_group,
    "資訊科技": it_group,
    "企業管理": management_group,
    "語言學習": language_group,
    "休閒娛樂": leisure_group,
};

//Overlay menu init, including layer group
var placeMarkers = {
    "研揚大樓(TR)": tr_group,
    "工程一館(E1)": e1_group,
    "管理大樓(MA)": ma_group,
    "國際大樓(IB)": ib_group,
    "圖書館(LB)": lb_group,
    "體育館(GYM)": gym_group,
};

//Map init
var ntust_map = L.map('ntustmap', {layers: [all_activity_group, tr_group, e1_group, ma_group, ib_group, lb_group, gym_group]}).setView([25.0134707,121.5419075], 18).locate({setView: true});

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
