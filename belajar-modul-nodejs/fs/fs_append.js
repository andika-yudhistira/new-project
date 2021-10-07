// fs.appendFile() untuk membuat dan mengisi file;

var fs = require('fs');
fs.appendFile('mynewfile1.txt','Hai Sayang', function(err){
    if (err) throw err;
    console.log('Saved!')
})