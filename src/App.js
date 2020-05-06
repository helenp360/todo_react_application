import React from 'react';
import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeadingUrgent from "./TaskItemHeadingUrgent/TaskItemHeadingUrgent"
import TaskItemHeadingImportant from "./TaskItemHeadingImportant/TaskItemHeadingImportant"
import TaskItemHeadingNonurgent from "./TaskItemHeadingNonurgent/TaskItemHeadingNonurgent"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>

      <TaskInput/>
      <br></br>

      <div className="container">
        <div className="row">

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingUrgent text="4"/>
          
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task One"/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Two"/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Three"/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Four"/></li>
          
          </div>  

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingImportant text="3"/>

              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Three"/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Four"/></li>
            
          </div>

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingNonurgent text="6"/>
          
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Five"/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem text="Task Six"/></li>
          
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;


//TaskItemActive and TaskItemInactive ?
