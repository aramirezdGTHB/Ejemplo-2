const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    let laPersona = {
        Nombre: 'Alvaro Stif',
        Apellidos: 'Ramirez Diaz'
    }
    
    res.write(JSON.stringify(laPersona));
    // res.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Web Server escuchando');