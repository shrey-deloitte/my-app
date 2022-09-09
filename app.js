var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"test applicaion v2"}')
})
expressapp.listen(1500, function () {
    console.log('Ready on port 1500!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});