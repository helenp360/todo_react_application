import React from 'react';
import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeading from "./TaskItemHeading/TaskItemHeading"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do List
      </header>

      <TaskInput/>
      <TaskItemHeading/>
      <TaskItem text="Task One"/>


    </div>
  );
}

export default App;


