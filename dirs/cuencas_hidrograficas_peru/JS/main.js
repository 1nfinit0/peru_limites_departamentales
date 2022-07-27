var boundary = [-81.3899688720703, -18.4412956237793, -68.5886001586914, 0.0298568718135357];

var map = L.map('map', {
    center: [(boundary[1] + boundary[3]) / 2, (boundary[0] + boundary[2]) / 2],
    zoom: 5
});

var defaultBase = L.tileLayer.provider('CartoDB.DarkMatter').addTo(map);

var baseLayers = {
    'Dark Matter': defaultBase,
    'OpenStreetMap': L.tileLayer.provider('OpenStreetMap'),
    'OpenTopoMap': L.tileLayer.provider('OpenTopoMap'),
    'EsriWorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
    'EsriWorldImagery': L.tileLayer.provider('Esri.WorldImagery')
};

var geojsonMarkerOptions = {
    fillColor: "#4444f54a",
    color: "#3388ffab",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var anotherLayer = L.geoJSON(data, geojsonMarkerOptions).addTo(map);

// Get legend url format
// http://idesep.senamhi.gob.pe:80/geoserver/g_03_04/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=g_03_04:03_04_001_03_001_513_0000_00_00


// var layer001 = L.tileLayer.wms('https://idesep.senamhi.gob.pe/geoserver/g_03_04/wms', {
//     layers: 'g_03_04:03_04_001_03_001_513_0000_00_00',
//     format: 'image/png',
//     opacity: 1,
//     transparent: true,
//     tiled: 'true'
// }).addTo(map);


var groupOverLays = {
    "Capas": {
        "Cuencas": anotherLayer
    }
};

L.control.groupedLayers(baseLayers, groupOverLays).addTo(map);
L.control.scale({position: 'bottomleft'}).addTo(map);

map.pm.addControls(options);