import React, { useState} from 'react';
import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskItemComplete from "./TaskItemComplete/TaskItemComplete"

import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeadingUrgent from "./TaskItemHeadingUrgent/TaskItemHeadingUrgent"
import TaskItemHeadingImportant from "./TaskItemHeadingImportant/TaskItemHeadingImportant"
import TaskItemHeadingNonurgent from "./TaskItemHeadingNonurgent/TaskItemHeadingNonurgent"

//Things to do!
//DONE get it to put tasks in different columns depending on different levels of urgency
//DONE show completed tasks but hide deleted tasks
//DONE do CSS for completed tasks - cross out and turn grey AND lose the done button
//Match up sizing and layout of task buttons
//Spacing between task items - need a table/border?
//If active tasks length = 0 and completed tasks is >=1 then well done message -- ternery operator?
//If only 1 item in list it needs to say "thing to do"
//CSS layout and colours
//tidy up and get rid of code (and files) I don't need


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
    {text: "Finish homework", completed: false, deleted: false, urgency: "1", id: "005"},

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

          <div className="list-group col-12 col-sm-4 task-list">
            <TaskItemHeadingUrgent text={ urgentTasksActive.length }/>
          
            {/* {urgentTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)} */}
            {urgentTasksActive.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
            <br></br>
            {urgentTasksCompleted.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}


          </div>  

          <div className="list-group col-12 col-sm-4 task-list">
            <TaskItemHeadingImportant text={ importantTasksActive.length }/>

            {importantTasksActive.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
            <br></br>
            {importantTasksCompleted.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}

            
          </div>

          <div className="list-group col-12 col-sm-4 task-list">
            <TaskItemHeadingNonurgent text={ nonurgentTasksActive.length }/>
          
            {nonurgentTasksActive.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}
            <br></br>
            {nonurgentTasksCompleted.map(task => <TaskItem key={ task.id } text={ task.text } completed={task.completed} />)}


          
          </div>     

        </div>
      </div>

    </div>
  );
}

export default App;

