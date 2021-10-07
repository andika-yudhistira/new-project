var moment = require('moment')
var salam = require('./salam2')
var http = require('http')
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(salam.salamSayang())
    res.write("Saat ini:" + moment().format('D MMMM YYYY HH:mm:ss'))
    res.end()
}).listen(8000)

console.log('server connected at port 8000')
console.log('Saat ini: ' + moment().format('D MMMM YYYY HH:mm:ss'))