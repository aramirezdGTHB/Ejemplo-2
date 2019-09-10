const {getLugarLatLng} = require('./Lugar/lugar');
const {getClima} = require('./Climas/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad',
        default: 'San Jose',
        demand: true
    }
}).argv;

getLugarLatLng(argv.direccion).then((resp) => {
    getClima(resp.lat, resp.lng).then(console.log);
});
getClima(9.934739, -84.087502).then(console.log).catch(console.log);
