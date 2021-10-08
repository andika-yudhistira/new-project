var fs = require('fs');
var moment = require('moment');

fs.open('mynewfile3.txt', 'w+', function(err, file){
    if (err) throw err;

    let content = "Hai sayangku, saat ini: " + moment().format('D MMMM YYYY HH:mm:ss')

    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.readFile('mynewfile3.txt', (err, data) =>{
        if (err) throw err;
        console.log(data.toString('utf-8'))
    })
})