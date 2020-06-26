import React from 'react';
import './TaskItemComplete.css';

function TaskItemComplete(props) {
  function handleDeleteClick() {
    // console.log("The delete button has been clicked");
    props.deleteTask(props.id);
  }
  return (
    
    <div className="task-item-complete">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7">
            <span className="list-group-item task-item-complete__text"><del>{ props.text }</del></span>
          </div>
          <div className="col-5 task-item-complete__buttons btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-secondary" onClick={ handleDeleteClick }>Delete</button>
          </div>
        </div>
      </div>
    </div>
    
  
  );
}

export default TaskItemComplete;