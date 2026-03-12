const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('welcome to the server')
        return res.end()
    }

    if(req.url === '/about'){
        //task 
        for (let i = 0; i < 100000; i++) {
            console.log(Math.random() * i)
        }
        return res.end("About page")
    }

    res.end('not found')
})

server.listen(3000)
console.log('server on port 3000')

// el caso con este archivo 
// se busca aprender como funciona el asincronismo
// cuando voy a cualquiera de los puertos todos se demoran debido al que e puerto
// "/about" esta realizando una tarea bastante pesada