import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    
    <div className={ `task-item ${ props.completed ? "task-item-complete" : "task-item-active"}`}>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <span className="list-group-item task-item__text">{ props.text }</span>
          </div>
          <div className="col-5 task-item__buttons btn-group btn-group-sm" role="group" aria-label="Basic example">
            { props.completed === false && <button type="button" className="btn btn-secondary">Done</button> }
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
    </div>
    
  
  );
}

export default TaskItem;

          // <ul className="list-group">
          //   <li className="list-group-item d-flex justify-content-between align-items-center">Thing 1<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
          //     <button type="button" class="btn btn-secondary">Done</button>
          //     <button type="button" class="btn btn-secondary">Edit</button>
          //     <button type="button" class="btn btn-secondary">Delete</button>
          //   </div></li>
          // </ul>


