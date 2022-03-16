import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}

interface TodoState {
  title: string;
  isCompleted: boolean;
  createdOn: Date;
}

class App extends Component<AppProps, TodoState> {
  todos = [];
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      isCompleted: false,
      createdOn: new Date(),
    };
  }

  componentDidMount() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    this.todos = todos;
    this.todos.sort((a, b) => (a > b ? 1 : -1));
    this.forceUpdate();
    console.log('Component Mounted');
  }

  componentDidUpdate() {
    console.log('Component Updated');
  }

  addTodo() {
    if (this.state.title) {
      this.todos.push(this.state);
      console.log(this.todos);
      this.setState({
        title: '',
        isCompleted: false,
        createdOn: new Date(),
      });
      this.todos.sort((a, b) => (a > b ? 1 : -1));
      this.updateLocalTodos();
    }
  }

  updateLocalTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleIsCompleted(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.forceUpdate(() => {});
    this.updateLocalTodos();
  }
  render() {
    return (
      <div>
        <Hello
          todos={this.todos}
          changeIsCompleted={(item) => this.toggleIsCompleted(item)}
        />
        <input
          type="text"
          onChange={(event) => this.setState({ title: event.target.value })}
          value={this.state.title}
        />
        <button onClick={() => this.addTodo()}>Add Todo</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
