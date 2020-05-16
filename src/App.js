import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskItemComplete from "./TaskItemComplete/TaskItemComplete"

import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeadingUrgent from "./TaskItemHeadingUrgent/TaskItemHeadingUrgent"
import TaskItemHeadingImportant from "./TaskItemHeadingImportant/TaskItemHeadingImportant"
import TaskItemHeadingNonurgent from "./TaskItemHeadingNonurgent/TaskItemHeadingNonurgent"


function App() {

  const [ tasks, setTasks ] = useState([
    {text: "Walk the dog", completed: true, deleted: false, urgency: "1", id: uuidv4()},
    {text: "Mop the kitchen", completed: false, deleted: false, urgency: "2", id: uuidv4()},
    {text: "Empty the dishwasher", completed: true, deleted: false, urgency: "2", id: uuidv4()},
    {text: "Ring Mum", completed: false, deleted: false, urgency: "2", id: uuidv4()},
    {text: "Wash the car", completed: false, deleted: false, urgency: "3", id: uuidv4()},
    {text: "Ironing", completed: true, deleted: false, urgency: "3", id: uuidv4()},
    {text: "Mow the lawn", completed: false, deleted: false, urgency: "3", id: uuidv4()},
    {text: "Email work", completed: true, deleted: false, urgency: "1", id: uuidv4()},
    {text: "Return parcel", completed: false, deleted: false, urgency: "3", id: uuidv4()},
    {text: "Finish react homework", completed: false, deleted: false, urgency: "1", id: uuidv4()},
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

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id ===id) {
        task.completed = true;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  function addTask(text, urgency) {
    const newTask = {
      text: text,
      completed: false,
      deleted: false,
      urgency: urgency,
      id: uuidv4()
    }

    const updatedTasks = [ ...tasks, newTask ]

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>

      <TaskInput addTask={ addTask }/>
      <br></br>

      <div className="container">
        <div className="row">

          <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
            <TaskItemHeadingUrgent text={ urgentTasksActive.length }/>
          
            {/* {urgentTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)} */}
            {urgentTasksActive.map(task => {
              return <TaskItem
                completeTask={ completeTask }
                deleteTask={ deleteTask }
                id={ task.id }
                key={ task.id }
                text={ task.text }
                completed={ task.completed }
                urgency={ task.urgency } />
            })}
            
            
            {urgentTasksCompleted.map(task => {
              return <TaskItemComplete
              deleteTask={ deleteTask }
              id={ task.id }
              key={ task.id }
              text={ task.text }
              completed={task.completed}
              urgency={ task.urgency } />
            })}
            
            <br></br>


          </div>  

          <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
            <TaskItemHeadingImportant text={ importantTasksActive.length }/>

            {importantTasksActive.map(task => {
              return <TaskItem
              completeTask={ completeTask }
              deleteTask={ deleteTask }
              id={ task.id }
              key={ task.id }
              text={ task.text }
              completed={task.completed}
              urgency={ task.urgency } />
            })}
            
            {importantTasksCompleted.map(task => {
              return <TaskItemComplete
              deleteTask={ deleteTask }
              id={ task.id }
              key={ task.id }
              text={ task.text }
              completed={task.completed}
              urgency={ task.urgency } />
            })}
            
            <br></br>

            
          </div>

          <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
            <TaskItemHeadingNonurgent text={ nonurgentTasksActive.length }/>
          
            {nonurgentTasksActive.map(task => {
              return <TaskItem
              completeTask={ completeTask }
              deleteTask={ deleteTask }
              id={ task.id }
              key={ task.id }
              text={ task.text }
              completed={task.completed}
              urgency={ task.urgency } />
            })}
            
            {nonurgentTasksCompleted.map(task => {
              return <TaskItemComplete
              deleteTask={ deleteTask }
              id={ task.id }
              key={ task.id }
              text={ task.text }
              completed={task.completed}
              urgency={ task.urgency } />
            })}

          
            <br></br>

          
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;

