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
        To Do List
      </header>

      <TaskInput/>
      <br></br>

      <div className="container">
        <div className="row">

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingUrgent/>
          
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem/></li>
          
          </div>  

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingImportant/>

              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem/></li>
            
          </div>

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingNonurgent/>
          
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem/></li>
              <li className="list-group-item d-flex justify-content-between align-items-center"><TaskItem/></li>
          
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;


//TaskItemActive and TaskItemInactive ?
