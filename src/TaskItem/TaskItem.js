import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4 task-item">
          <div className="task-item__text">
            <p>Hello
              <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Done</button>
                <button type="button" class="btn btn-secondary">Edit</button>
                <button type="button" class="btn btn-secondary">Delete</button>
              </div>
            </p>
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