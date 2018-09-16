import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} alt="logo" />
        <div>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
