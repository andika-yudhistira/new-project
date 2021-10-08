//Membuat File di Nodejs
// Selain untuk membaca file, modul fs juga digunakan untuk membuat file baru. Terdapat beberapa method yang dapat digunakan untuk membuat file: 1
// fs.writeFile() untuk membuat dan menulis file.
// fungsi fs.open() akan membuat file kosong apabila belum ada file dengan nama yang ditentukan.
// Namun, apabila di sana sudah ada file, fungsi fs.open() akan menindihnya.

// Macam-macam Flags
// r buka file untuk dibaca. Jika file tidak ada maka akan terjadi error.
// r+ buka file untuk dibaca dan ditulis. Apabila file tidak ada maka akan terjadi error.
// rs buka file untuk dibaca dalam mode synchronous.
// rs+ buka file untuk dibaca dan ditulis dalam mode synchronous.
// w buka file euntuk ditulis.
// wx sama seperti w, tapi akan error jika sudah ada filenya.
// w+ buka file untuk ditulis dan dibaca.
// wx+ sama seperti w+ tapi akan error jika sudah ada filenya.
// a buka file untuk diisi.
// ax sama seperti a tapi akan error jika sudah ada filenya.
// a+ buka file untuk diisi.
// ax+ sama seperti a+ tapi akan error jika sudah ada filenya.

var moment = require('moment');
var fs = require('fs');
fs.open('mynewfile2.txt', 'w+', function(err, file){
    if (err) throw err;

    let content = "Hai sayangku, saat ini: " + moment().format('D MMMM YYYY HH:mm:ss')

    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Saved!')
    });

    fs.readFile("mynewfile2.txt", (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    })
})