import React from 'react';
import './App.css';
import HospitalList from './features/hospitals/components/HospitalList';
import TodoList from './features/todos/components/TodoList';
import TodoListActions from './features/todos/components/TodoListActions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListActions></TodoListActions>
        <TodoList></TodoList>

        <HospitalList></HospitalList>
      </header>
    </div>
  );
}

export default App;
