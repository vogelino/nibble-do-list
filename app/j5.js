var exports = module.exports = {};
var five = require('johnny-five');
var board = new five.Board();
var boardReady = null;
var servo = null;
var servoPosition = {
	closed: 1,
	open: 91
};

board.on('ready', function() {
	boardReady = true;
	servo = five.Servo(10);
});

exports.init = function() {
	if (!!servo && !!boardReady) {
		console.log('Initializing the dispenser');
		servo.min();
	}
};

exports.closeDispenser = function() {
	if (!!servo && !!boardReady) {
		console.log('Closing the dispenser');
		servo.to(servoPosition.closed).stop();
	}
};

exports.openDispenser = function() {
	if (!!servo && !!boardReady) {
		console.log('Opening the dispenser');
		servo.to(servoPosition.open).stop();
	}
}
