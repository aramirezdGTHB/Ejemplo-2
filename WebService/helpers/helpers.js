const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('getMayuscula', (texto) => {
    return texto.toUpperCase();
});