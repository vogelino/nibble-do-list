'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var j5 = require("./app/j5");
var io = require('socket.io');
var socket = io.listen(server);
var port = 3000;

app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendFile('index.html');
});

socket.on('connection', function(client) {
	client.on('message', function(action) {
		console.log('Message recievde from client with action "' + action.type + '"');
		switch(action.type) {
			case 'MOVE_SERVO':
				j5.to(action.value);
			break;
			default:
				return action;
		}
	});
});

console.log('Listening on port http://localhost:' + port);
server.listen(port);
