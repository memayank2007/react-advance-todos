import React from 'react';
import CreateTodo from './create-todo'
import TodosList from './todos-list';

const todos = [

{
	task: 'make React tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted :true
}



];

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			todos
		};

	}
	render(){
		return(
				<div>
					<CreateTodo createTask= {this.createTask.bind(this)}/>
					<h1>React todos app!!!!!</h1>
					<TodosList todos = {this.state.todos}/>
				</div>
			);
	};

	createTask(task){
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({todos: this.state.todos});
	}



}