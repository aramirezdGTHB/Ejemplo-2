const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const elPuerto = process.env.PORT || 8080;

hbs.registerPartials(__dirname +  '/views/parciales');
app.set('view engine','hbs');


app.get('/', function (req, res){

    res.render('home', {
        nombre:'Alvaro Ramirez Diaz',
        anio: new Date().getFullYear()
    });
});

//app.use(express.static(__dirname + '/public'));

app.listen(elPuerto);