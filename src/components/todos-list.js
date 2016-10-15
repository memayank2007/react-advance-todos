import _ from 'lodash' 
import React from 'react';
import TodosListItem from './todos-list-item';
import TodosListHeader from './todos-list-header';

export default class TodosList extends React.Component{
	renderItems(){
		return _.map(this.props.todos, (todo , index) => <TodosListItem key={index}{...todo} />);
	}

	render(){
		console.log(this.props);
		return(
				<table>
					<TodosListHeader />
					<tbody>
						{this.renderItems()}
					</tbody>
				</table>
			);
	};



}