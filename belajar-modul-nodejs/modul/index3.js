var moment = require('moment')
var salam = require('./salam2')
var http = require('http')
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(salam.salamSayang())
    res.write("<br><h1>Saat ini:</h1>" + moment().format('D MMMM YYYY HH:mm:ss'))
    res.end()
}).listen(8000)

console.log('server connected at port 8000')
console.log(salam.salamSayang())
console.log('Saat ini: ' + moment().format('D MMMM YYYY HH:mm:ss'))