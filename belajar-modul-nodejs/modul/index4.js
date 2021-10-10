//mengambil URL untuk routing
var http = require('http')
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    switch(req.url){
        case '/about':
            res.write('Ini halaman about')
            break;
        case '/profile':
            res.write('Ini halaman profile')
            break;
        case '/produk':
            res.write('Ini halaman produk')
            break;
        default:
            res.write('404 Halaman tidak tersedia')
    }
    res.end();
}).listen(8000)

console.log('Server listening on port 8000')