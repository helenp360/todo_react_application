import React, { useState} from 'react';
import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskItemComplete from "./TaskItemComplete/TaskItemComplete"

import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeadingUrgent from "./TaskItemHeadingUrgent/TaskItemHeadingUrgent"
import TaskItemHeadingImportant from "./TaskItemHeadingImportant/TaskItemHeadingImportant"
import TaskItemHeadingNonurgent from "./TaskItemHeadingNonurgent/TaskItemHeadingNonurgent"

//Things to do!
//get it to put tasks in different columns depending on different levels of urgency
//show completed tasks but hide deleted tasks
//do CSS for completed tasks - cross out and turn grey AND lose the done button


function App() {

  // const tasks = useState()[0];
  // const setTasks = useState()[1];

  const [ tasks ] = useState([
    {text: "Walk the dog", completed: false, urgency: "1", id: "001"},
    {text: "Mop the kitchen", completed: false, urgency: "1", id: "002"},
    {text: "Empty the dishwasher", completed: false, urgency: "1", id: "003"},
    {text: "Ring Mum", completed: false, urgency: "2", id: "004"},
    {text: "Wash the car", completed: false, urgency: "3", id: "005"}
  ]);

  // const activeTasks = tasks.filter(task => !task.completed);

  const urgentTasks = tasks.filter(task => task.urgency==="1");
  const importantTasks = tasks.filter(task => task.urgency==="2");
  const nonurgentTasks = tasks.filter(task => task.urgency==="3");


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
            <TaskItemHeadingUrgent text={ urgentTasks.length }/>
          
            {urgentTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
          
          </div>  

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingImportant text={ importantTasks.length }/>

            {importantTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}

            
          </div>

          <div className="col-12 col-sm-4 task-list">
            <TaskItemHeadingNonurgent text={ nonurgentTasks.length }/>
          
            {nonurgentTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}


          
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;


//TaskItemActive and TaskItemInactive ?
