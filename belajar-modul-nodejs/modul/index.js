// impor modul mementjs dan salam
var moment = require('moment')
var salam = require('./salam')

// menggunakan modul
console.log(salam.salamPagi())
console.log('sekarang: ' + moment().format('D MMMM YYYY, h:mm:ss a'))