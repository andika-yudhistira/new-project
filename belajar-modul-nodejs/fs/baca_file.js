var fs = require('fs');
var http = require('http');

http.createServer(function (req, res){
    //baca file
    fs.readFile('index.html', (err, data) => {
        if (err) throw err;

        //kirim respon
        res.writeHead(200, {'Content-type': 'text/html'})
        res.write(data)
        res.end();
    })
}).listen(8000)

console.log('server connected at port 8000')