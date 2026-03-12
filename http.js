const http = require('http')

const server = http.createServer(function (request, response){
    console.log(request.url)

    if (request.url === '/'){
        response.write('bienvenido al servidor')
        return response.end()
    }

    if (request.url === '/about'){
        response.write('acerca de')
        return response.end()
    }
    response.write(`
        <h1> Not Found</h1>
        <p> esta pagina no se encontro <p>
        <a href="/" >Volver pagina principal<a>
        `)
    response.end()
});

server.listen(3000)

console.log("servidor en puerto 3000")