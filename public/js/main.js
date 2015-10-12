var socket = new io();
socket.connect('http://localhost:3000', {
	autoConnect: true
});

var TodoItem = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired,
		done: React.PropTypes.bool.isRequired,
		onTodoChange: React.PropTypes.func.isRequired
	},
	onChange: function () {
		this.props.onTodoChange(Object.assign({}, {
			title: this.refs.title.value,
			id: this.props.id,
			done: this.refs.done.checked
		}));
	},
	render: function() {
		return (
			React.createElement('li', {
				className: 'todo-item ' +
					(this.props.done ? 'todo-item-done' : '')
			},
				React.createElement('input', {
					type: 'checkbox',
					value: this.props.id,
					id: this.props.id,
					defaultChecked: this.props.done,
					ref: 'done',
					onChange: this.onChange
				}),
				React.createElement('input', {
					type: 'text',
					value: this.props.title,
					ref: 'title',
					onChange: this.onChange
				})
			)
		);
	}
});

var TodoList = React.createClass({
	propTypes: {
		todos: React.PropTypes.array.isRequired,
		onTodoChange: React.PropTypes.func.isRequired
	},
	render: function() {
		var onTodoChange = this.props.onTodoChange;
		var listOfTodos = this.props.todos.map(function (todo) {
			return (
				React.createElement(TodoItem, {
					title: todo.title,
					id: todo.id,
					key: todo.id,
					done: todo.done,
					onTodoChange: onTodoChange
				})
			);
		});
		return (
			React.createElement('ul', { className: 'todo-list' }, listOfTodos)
		);
	}
});

// Templates
var TODO_TEMPLATE = { title: '', id: '', done: '', errors: {}}

// Actions
function markTaskComplete() {
	socket.send({
		type: 'TASK_COMPLETED'
	});
};

function onTodoChange(changes) {
	console.log('Todo state updated', changes);
	var newTodos = [];
	state.todos.forEach(function (todo) {
		if (todo.id === changes.id) {
			newTodos.push(changes);
			if (!todo.done && !!changes.done) {
				markTaskComplete();
			}
		}
		else {
			newTodos.push(todo);
		}
	});
	setState({ todos: newTodos });
}

// Model
var state = {};

function setState(changes) {
    Object.assign(state, changes);
    var Component = React.createElement(TodoList, Object.assign({}, state, {
		onTodoChange: onTodoChange
	}));

    ReactDOM.render(Component, document.getElementById('app'));
}

setState({
	todos: [{
		title: 'Test todo',
		id: 1,
		done: false
	}]
});
