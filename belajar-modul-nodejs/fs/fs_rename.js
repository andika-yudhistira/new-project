var fs = require('fs');

fs.rename('mynewfile3.txt','myrenamedfile3.txt', function(err){
    if (err) throw err;
    console.log('File renamed')
})