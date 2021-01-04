const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Sede 05 <a href="sede.html?id=1" class="choose-ophanage"> <img src="./public/images/arrow-white.svg" > </a>')

L.marker([-27.222633, -49.6455874], { icon })
.addTo(map)
.bindPopup(popup)