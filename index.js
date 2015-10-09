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
	j5.init();

	client.on('message', function(action) {
		console.log('Message recievde from client with action "' + action.type + '"');
		var functionToExecute = getFunctionFromAction(action);
		functionToExecute();
	});
});

console.log('Listening on port http://localhost:' + port);
server.listen(port);

function getFunctionFromAction(action) {
	switch(action.type) {
		case 'TASK_COMPLETED':
			return rewardUser;
		default:
			return action;
	}
}

function rewardUser() {
	j5.openDispenser();
	var timeoutID = null;
	timeoutID = setTimeout(function() {
		j5.closeDispenser();
		clearTimeout(timeoutID);
	}, 2000);
}
