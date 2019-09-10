const axios = require('axios');


const getLugarLatLng = async (direccion) => {
    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: {'x-rapidapi-key': '4f3856f244msh97443f6c5219043p13a903jsn6cd0bb479c29'}
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[1];
    const dir =  resp.data.Results[1].name; 
    const lat =  resp.data.Results[1].lat;
    const lng = resp.data.Results[1].lon;

    return {
        dir,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}


