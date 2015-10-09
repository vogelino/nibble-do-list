'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var j5 = require('johnny-five');
var io = require('socket.io');
var server = require('http').createServer(app);
var socket = socket.listen(server);
var board = new five.Board();
var port = 3000;

app.use('/', express.static(_dirname + 'public'));
app.get('/', function(req, res){
	res.sendFile('index.html');
});

board.on('ready', function() {
	socket.on('connection', function(client) {
		client.on('message', function(value) {
			console.log('Message recievde from client with value %d', value);
		});
	});
});

console.log('Listening on port http://localhost:' + port);
server.listen(port);
