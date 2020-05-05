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
            <TaskItem/>
            <TaskItem/>
          </div>  

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingImportant/>
            <TaskItem/>
            <TaskItem/>
          </div>

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingNonurgent/>
            <TaskItem/>
            <TaskItem/>
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;


//TaskItemActive and TaskItemInactive ?


