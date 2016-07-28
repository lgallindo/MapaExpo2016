var map = new L.Map('mapid', {center: new L.LatLng(-8.0520091,-34.9493471), zoom: 16});
var googleLayer = new L.Google('ROADMAP');
map.addLayer(googleLayer);
console.log("carregado");
