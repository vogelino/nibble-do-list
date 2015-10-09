var exports = module.exports = {};
var five = require('johnny-five');
var board = new five.Board();
var boardReady = null;
var servo = null;

board.on('ready', function() {
	boardReady = true;
	servo = five.Servo(10);
	servo.center();
});

exports.to = function(degree) {
	if (!!servo && !!boardReady) {
		servo.to(degree);
	}
}
