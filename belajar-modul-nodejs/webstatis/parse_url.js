var url = require('url')
var adr = 'https://medium.com/javascript-indonesia-community/express-js-mongodb-crud-part-1-1d5aba5e3629';
var q = url.parse(adr,true)

//hasil parse 
console.log("protocol: " + q.protocol)
console.log("hostname: " + q.hostname)
console.log("pathname: " + q.pathname)
console.log("params: " + q.search)

var qdata = q.query //ambil query string sebagai objek 
console.log(qdata)