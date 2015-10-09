$(document).ready(function () {
	var socket = new io();
	socket.connect('http://localhost:3000', {
		autoConnect: true
	});

	$('#test').click(function(e) {
		e.preventDefault();
		socket.send({
			type: 'TASK_COMPLETED'
		});
	});
});
