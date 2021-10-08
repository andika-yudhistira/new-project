// fs.appendFile() untuk membuat dan mengisi file;
// sifat dari method fs.appendFile(), ia akan selalu menambah isi dari file disetiap eksekusi
var moment = require('moment');
var fs = require('fs');
fs.appendFile("mynewfile1.txt", "Hai sayangku, saat ini:" + moment().format('D MMMM YYYY HH:mm:ss'),function(err){
    if (err) throw err;
    console.log('Saved!')
});