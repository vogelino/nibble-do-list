var socket = new io();
socket.connect('http://localhost:3000', {
	autoConnect: true
});

var TodoItem = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		id: React.PropTypes.number.isRequired,
		done: React.PropTypes.bool.isRequired,
		isNewField: React.PropTypes.bool.isRequired,
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
					(this.props.done ? 'todo-item-done ' : '') +
					(this.props.isNewField ? 'todo-item-new-field' : '')
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
		newTodo: React.PropTypes.object.isRequired,
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
					isNewField: false,
					onTodoChange: onTodoChange
				})
			);
		});
		listOfTodos.push(
			React.createElement(TodoItem, {
				title: this.props.newTodo.title,
				id: this.props.todos.length,
				key: this.props.todos.length,
				done: this.props.newTodo.done,
				isNewField: true,
				onTodoChange: onTodoChange
			})
		);
		return (
			React.createElement('ul', { className: 'todo-list' }, listOfTodos)
		);
	}
});

// Templates
var TODO_TEMPLATE = { title: '', id: null, done: false, errors: {}}

// Actions
function markTaskComplete() {
	socket.send({
		type: 'TASK_COMPLETED'
	});
};

function onTodoChange(changes) {
	console.log('Todo state updated', changes);
	var newTodos = [];
	var found = false;

	state.todos.forEach(function (todo) {
		if (todo.id === changes.id) {
			newTodos.push(changes);
			if (!todo.done && !!changes.done) {
				markTaskComplete();
			}
			found = true;
		}
		else {
			newTodos.push(todo);
		}
	});
	if (!found) {
		newTodos.push(changes);
		setState({
			todos: newTodos,
			newTodo: Object.assign({}, TODO_TEMPLATE)
		});
	}
	else {
		setState({ todos: newTodos });
	}
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
		id: 0,
		done: false
	}],
	newTodo: Object.assign({}, TODO_TEMPLATE)
});
