import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import TodoListActions from './features/todos/components/TodoListActions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListActions></TodoListActions>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
