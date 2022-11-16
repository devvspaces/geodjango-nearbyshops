const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const map = L.map("map");

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: attribution,
}).addTo(map);

const markers = JSON.parse(document.getElementById("markers-data").textContent);

let feature = L.geoJSON(markers, {
    style: function(feature){
        return {
            color: "#ff4d33"
        }
    }
})
    .bindPopup(function (layer) {
        return `<b>${layer.feature.properties.name}</b><br/>This is a nearby shop`;
    })
    .addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

map.fitBounds(feature.getBounds(), { padding: [100, 100] });

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
