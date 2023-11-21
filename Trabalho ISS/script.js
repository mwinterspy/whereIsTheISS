
var latitude = 0;
var longitude = 0;
var altitude = 0;
var velocidade = 0;

async function getIss() {
    const dados = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    const dadosConvertidos = await dados.json();
    console.log(dadosConvertidos);
    latitude = dadosConvertidos.latitude;
    longitude = dadosConvertidos.longitude;
    altitude = dadosConvertidos.altitude;
    velocidade = dadosConvertidos.velocity;

    document.getElementById('lat').innerHTML = latitude + '°';
    document.getElementById('lon').innerHTML = longitude + '°';
    document.getElementById('vel').innerHTML = Number(velocidade.toFixed(2)) + ' Km/h ';
    document.getElementById('alt').innerHTML = Number(altitude.toFixed(2)) + 'Km';

    map.setView([latitude, longitude]);






} getIss();

setInterval(getIss, 1000);


function initialize() {
    map = new WE.map('earth_div');

    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
        tileSize: 256,
        bounds: [[-85, -180], [85, 180]],
        minZoom: 0,
        maxZoom: 16,
        attribution: 'WebGLEarth example',
        tms: true
    }).addTo(map);


}

function alertaMilhas(){
    var milhas = velocidade * 0.62;
    var milhasAltura = altitude * 0.62;

    alert("Velocidade: " + milhas.toFixed(2) + '  Mp/h\n' +
           "Altura: " + milhasAltura.toFixed(2) + ' Milhas' );
}