import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component{

  state = {
    todos: [ ]
  }
  
  //load todos from JSONPlaceholder dummy todos API
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(result => this.setState({ todos: result.data}))
  }

  //toggle complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
          if(todo.id === id)
            todo.completed = !todo.completed
          return todo;
        })
    })
  }

  
  //deleting a todo from hardcoded todos state
  deleteTodo = (id) => {
    console.log("in del, "+id)
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }
  

  /* 
  //adding new todo to hardcoded todos state
  addTodo = (newTitle) => {
    const size = this.state.todos.length + 1
    const newTodo = {
      id: size,
      title: newTitle,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  */

  //make a post request to dummy API to add new todo
  addTodo = (newTitle) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: newTitle,
      completed: false
    }).then(result => this.setState(
      {
        todos: [...this.state.todos, result.data]
      }))
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
