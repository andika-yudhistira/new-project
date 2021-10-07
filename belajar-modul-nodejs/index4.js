//mengambil URL untuk routing
var http = require('http')
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('URL: ' + req.url)
    res.end()
}).listen(8000)

console.log('Server connected to port 8000')