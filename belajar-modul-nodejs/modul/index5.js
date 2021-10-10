//Mengambil query string di nodejs
var http = require('http')
var url = require('url')

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    var q = url.parse(req.url, true).query;
    var txt = 'Kata kunci:' + q.keyword;
    res.end(txt);
}).listen(8000)

console.log('server connected at port 8000');