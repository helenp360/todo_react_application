import React from 'react';
import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskInput from "./TaskInput/TaskInput"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do List
      </header>

      <TaskInput text="Enter a task"/>
      <TaskItem text="Task One"/>
      <TaskItem text="Task Two"/>
      <TaskItem text="Task Three"/>


    </div>
  );
}

export default App;


