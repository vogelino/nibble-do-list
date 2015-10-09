$(document).ready(function () {
	var socket = new io();
	socket.connect('http://localhost:3000', {
		autoConnect: true
	});

	$('#test').click(function(e) {
		e.preventDefault();
		socket.send({
			type: 'MOVE_SERVO',
			value: 45
		});
	});
});
