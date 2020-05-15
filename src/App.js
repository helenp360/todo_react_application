import React, { useState} from 'react';
import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskItemComplete from "./TaskItemComplete/TaskItemComplete"

import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeadingUrgent from "./TaskItemHeadingUrgent/TaskItemHeadingUrgent"
import TaskItemHeadingImportant from "./TaskItemHeadingImportant/TaskItemHeadingImportant"
import TaskItemHeadingNonurgent from "./TaskItemHeadingNonurgent/TaskItemHeadingNonurgent"


function App() {

  const [ tasks ] = useState([
    {text: "Walk the dog", completed: true, deleted: false, urgency: "1", id: "001"},
    {text: "Mop the kitchen", completed: false, deleted: false, urgency: "2", id: "002"},
    {text: "Empty the dishwasher", completed: true, deleted: false, urgency: "2", id: "003"},
    {text: "Ring Mum", completed: false, deleted: false, urgency: "2", id: "004"},
    {text: "Wash the car", completed: false, deleted: false, urgency: "3", id: "005"},
    {text: "Ironing", completed: true, deleted: false, urgency: "3", id: "005"},
    {text: "Mow the lawn", completed: false, deleted: false, urgency: "3", id: "005"},
    {text: "Email work", completed: true, deleted: false, urgency: "1", id: "005"},
    {text: "Return parcel", completed: false, deleted: false, urgency: "3", id: "005"},
    {text: "Finish react homework", completed: false, deleted: false, urgency: "1", id: "005"},

  ]);

  // const activeTasks = tasks.filter(task => !task.completed);

  // const urgentTasks = tasks.filter(task => task.deleted===false && task.urgency==="1");
  const urgentTasksActive = tasks.filter(task => task.deleted===false && task.urgency==="1" && task.completed===false);
  const urgentTasksCompleted = tasks.filter(task => task.deleted===false && task.urgency==="1" && task.completed===true);

  // const importantTasks = tasks.filter(task => task.deleted===false && task.urgency==="2");
  const importantTasksActive = tasks.filter(task => task.deleted===false && task.urgency==="2" && task.completed===false);
  const importantTasksCompleted = tasks.filter(task => task.deleted===false && task.urgency==="2" && task.completed===true);

  // const nonurgentTasks = tasks.filter(task => task.deleted===false && task.urgency==="3");
  const nonurgentTasksActive = tasks.filter(task => task.deleted===false && task.urgency==="3" && task.completed===false);
  const nonurgentTasksCompleted = tasks.filter(task => task.deleted===false && task.urgency==="3" && task.completed===true);



  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>

      <TaskInput/>
      <br></br>

      <div className="container">
        <div className="row">

          <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
            <TaskItemHeadingUrgent text={ urgentTasksActive.length }/>
          
            {/* {urgentTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)} */}
            {urgentTasksActive.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
            {urgentTasksCompleted.map(task => <TaskItemComplete key={ task.id } text={ task.text } completed={task.completed} />)}
            <br></br>


          </div>  

          <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
            <TaskItemHeadingImportant text={ importantTasksActive.length }/>

            {importantTasksActive.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
            {importantTasksCompleted.map(task => <TaskItemComplete key={ task.id } text={ task.text } completed={task.completed} />)}
            <br></br>

            
          </div>

          <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
            <TaskItemHeadingNonurgent text={ nonurgentTasksActive.length }/>
          
            {nonurgentTasksActive.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
            {nonurgentTasksCompleted.map(task => <TaskItemComplete key={ task.id } text={ task.text } completed={task.completed} />)}
            <br></br>

          
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;

