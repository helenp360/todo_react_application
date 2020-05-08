import React from 'react';
import './TaskItemComplete.css';

function TaskItemComplete(props) {
  return (
    
    <div className="task-item-complete">
      <div className="container">
        <div className="row">
          <div className="col task-item-complete__text">
            <p><del>{ props.text }</del></p>
          </div>
          <div class="col task-item-complete__buttons btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Edit</button>
            <button type="button" class="btn btn-secondary">Delete</button>
          </div>
        </div>
      </div>
    </div>
    
  
  );
}

export default TaskItemComplete;