import React, { useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './App.css';
import TaskItem from "./TaskItem/TaskItem"
import TaskItemComplete from "./TaskItemComplete/TaskItemComplete"

import TaskInput from "./TaskInput/TaskInput"
import TaskItemHeadingUrgent from "./TaskItemHeadingUrgent/TaskItemHeadingUrgent"
import TaskItemHeadingImportant from "./TaskItemHeadingImportant/TaskItemHeadingImportant"
import TaskItemHeadingNonurgent from "./TaskItemHeadingNonurgent/TaskItemHeadingNonurgent"


function App() {

  const [tasks, setTasks] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
    .get("https://nrsi2181mc.execute-api.eu-west-1.amazonaws.com/dev/tasks")
    .then(
      (response) => {
        console.log(response.data)
        setTasks(response.data.tasks);
        setLoading(false);
      })
    .catch(error => {
      console.log("Error fetching data", error);
      setLoading(false);
    });

  }, []); 

  // const activeTasks = tasks.filter(task => !task.completed);

  // const urgentTasks = tasks.filter(task => task.deleted===false && task.urgency==="1");
  const urgentTasksActive = tasks && tasks.filter(task => task.urgency === 1 && task.completed !== 1);
  const urgentTasksCompleted = tasks && tasks.filter(task => task.urgency === 1 && task.completed === 1);

  // const importantTasks = tasks.filter(task => task.deleted===false && task.urgency==="2");
  const importantTasksActive = tasks && tasks.filter(task => task.urgency === 2 && task.completed === 0);
  const importantTasksCompleted = tasks && tasks.filter(task => task.urgency === 2 && task.completed === 1);

  // const nonurgentTasks = tasks.filter(task => task.deleted===false && task.urgency==="3");
  const nonurgentTasksActive = tasks && tasks.filter(task => task.urgency === 3 && task.completed === 0);
  const nonurgentTasksCompleted = tasks && tasks.filter(task => task.urgency === 3 && task.completed === 1);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.taskId !== id);
    
    setTasks(updatedTasks);

    axios
    .delete(`https://nrsi2181mc.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
    .then(response => {
      console.log("Task deleted");
    })
    .catch(error => {
      console.log("Could not delete task", error);
    });
  }

  const [text, setText] = useState("");
  const [urgency, setUrgency] = useState("");
  const [showModal, setShowModal] = useState(false);


  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleUrgencyChange(event) {
    setUrgency(event.target.value);
  }

  function completeTask(id) {
    let updatedTask;
    let updatedTasks = tasks.map(task => {
      if (task.taskId === id) {
        task.completed = 1;
        updatedTask = task;
      }
      return task;

    })

    setTasks(updatedTasks);

    axios
    .put(`https://nrsi2181mc.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, updatedTask)
    .then(response => {
      console.log("Task marked as completed")
    })
    .catch(error => {
      console.log("Could not update the task", error);
    })
  }

  function addTask(text, urgency) {
    const newTask = {
      text: text,
      completed: 0,
      urgency: parseInt(urgency),
      
    }

    axios
    .post("https://nrsi2181mc.execute-api.eu-west-1.amazonaws.com/dev/tasks", newTask)
    .then(
      (response) => {
        newTask.taskId = response.data.tasks[0].taskId;
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        console.log(updatedTasks);
      }
    )
    .catch((error) => {
      console.log("Error adding task", error)
    })

    
  }

  function editTask (id) {
    const updatedTasks = tasks.map(task => {
      if (task.taskId === id) {
      }
      return task;
    })

    setTasks(updatedTasks);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>

      {tasks && (
        <Fragment>

      <TaskInput
        text={text}
        urgency={urgency}
        handleTextChange={handleTextChange}
        handleUrgencyChange={handleUrgencyChange}
        addTask={addTask}
      />
      <br></br>

        <div className="container">
          <div className="row">

            <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
              <TaskItemHeadingUrgent text={urgentTasksActive.length} />

              {urgentTasksActive.map(task => {
                return <TaskItem
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  id={task.taskId}
                  key={task.taskId}
                  text={task.text}
                  completed={task.completed}
                  urgency={task.urgency} />
              })}


              {urgentTasksCompleted.map(task => {
                return <TaskItemComplete
                  deleteTask={deleteTask}
                  id={task.taskId}
                  key={task.taskId}
                  text={task.text}
                  completed={task.completed}
                  urgency={task.urgency} />
              })}

              <br></br>


            </div>

            <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
              <TaskItemHeadingImportant text={importantTasksActive.length} />

              {importantTasksActive.map(task => {
                return <TaskItem
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  id={task.taskId}
                  key={task.taskId}
                  text={task.text}
                  completed={task.completed}
                  urgency={task.urgency} />
              })}

              {importantTasksCompleted.map(task => {
                return <TaskItemComplete
                  deleteTask={deleteTask}
                  id={task.taskId}
                  key={task.taskId}
                  text={task.text}
                  completed={task.completed}
                  urgency={task.urgency} />
              })}

              <br></br>


            </div>

            <div className="list-group col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 task-list">
              <TaskItemHeadingNonurgent text={nonurgentTasksActive.length} />

              {nonurgentTasksActive.map(task => {
                return <TaskItem
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  id={task.taskId}
                  key={task.taskId}
                  text={task.text}
                  completed={task.completed}
                  urgency={task.urgency} />
              })}

              {nonurgentTasksCompleted.map(task => {
                return <TaskItemComplete
                  deleteTask={deleteTask}
                  id={task.taskId}
                  key={task.taskId}
                  text={task.text}
                  completed={task.completed}
                  urgency={task.urgency} />
              })}


            <br></br>


          </div>

        </div>
      </div>

      </Fragment>
      )}

    </div>
  );
}

export default App;

