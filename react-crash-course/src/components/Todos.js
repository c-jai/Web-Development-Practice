import React from 'react';
import Todoitem from './Todoitem';


class Todos extends React.Component{
  render(){
    return this.props.todos.map((todo) => <Todoitem todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo}/>);
    
    }
}

export default Todos;
