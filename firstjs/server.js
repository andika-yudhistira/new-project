var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('Hello Keju joget')
    res.end()
}).listen(8000)

console.log('Server listening on port 8000')