var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res){
    var q = url.parse(req.url,true)

    if(q.pathname == '/search' && req.method === 'GET')
//ambil parameter dari url
var keywords = q.query.keywords;

if (keywords){
    //ambil data dari form dengan metode GET
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write("<h3>Search results:</h3>")
    res.write("<p>Anda mencari: <b>" + keywords + "</b></p>")
    res.write("<pre>Tidak ada hasil! Maaf website ini masih dalam pengembangan</pre>")
    res.end("<a href='/search/'>Kembali</a>")
} else {
    //tampilkan form search
    fs.readFile('search.html', (err, data) => {
        if (err) {//kirim balasan error
            res.writeHead(404, { 'Content-Type': 'text/html'})
            return res.end('404 not found')
        }
        //kirim form search.html
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(data)
        return res.end();
        })
    }
}).listen(8000)

console.log('Server listening on port 8000')

