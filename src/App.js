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
      <br></br>
      
      <TaskItemHeading/>
      <br></br>

      <div className="container">
        <div className="row">

          <div className="col-12 col-sm-4 task-item">
            <TaskItem/>
            <TaskItem/>
          </div>

          <div className="col-12 col-sm-4 task-item">
            <TaskItem/>
            <TaskItem/>
          </div>

          <div className="col-12 col-sm-4 task-item">
            <TaskItem/>
            <TaskItem/>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;


//need heading then items, then headings etc
//3 different headings for each level of urgency?

//TaskItemActive and TaskItemInactive ?
