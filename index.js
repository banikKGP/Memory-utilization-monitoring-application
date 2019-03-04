const express = require('express');
const app = express();
const DEFAULT_PORT = 8001;

var server = require('http').createServer(app);
var io = require('socket.io')(server);
server.listen(DEFAULT_PORT);

const os = require('os-utils');
const ram = require('./ramutil');
const test = require('./test');
const util = require('./ramobserver');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

util.trackRamUtilization();

io.on('connection', function (socket) {
    try {
        console.log('socket connected succesfully')
        setInterval(() => {
            mem = ram.ramCalculation();
            socket.emit('ramUtil', mem);
            os.cpuUsage(function (v) {
                socket.emit('cpuUtil', v * 100)
            });
        }, 100)
    }
    catch (e) { console.log(e) }
})

app.get('/test', (req, res) => {
    test.testRamUtilization();
})