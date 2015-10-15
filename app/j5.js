var exports = module.exports = {};
var five = require('johnny-five');
var board = new five.Board();
var boardReady = null;

var led = null;
var ledAnimationSpeed = 300;

var servo = null;
var servoPosition = {
	closed: 15,
	open: 155
};

board.on('ready', function() {
	boardReady = true;
	led = five.Led(3);
	servo = five.Servo(10);
});

exports.init = function() {
	if (!!servo && !!boardReady) {
		console.log('Initializing the dispenser');
		servo.to(servoPosition.closed).stop();
	}
};

exports.closeDispenser = function() {
	if (!!led && !!servo && !!boardReady) {
		console.log('Closing the dispenser');
		led.fadeOut(ledAnimationSpeed);
		servo.to(servoPosition.closed).stop();
	}
};

exports.openDispenser = function() {
	if (!!led && !!servo && !!boardReady) {
		console.log('Opening the dispenser');
		led.pulse(ledAnimationSpeed);
		servo.to(servoPosition.open).stop();
	}
}
