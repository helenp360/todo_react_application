import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4 task-item">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">Thing 1<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Thing 2<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 3<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 4<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 5<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 task-item">
          <ul className="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">Thing 1<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li class="list-group-item d-flex justify-content-between align-items-center">Thing 2<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li class="list-group-item d-flex justify-content-between align-items-center">Thing 3<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li class="list-group-item d-flex justify-content-between align-items-center">Thing 4<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li class="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 5<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li class="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 6<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
          </ul>
        </div>
        <div className="col-12 col-sm-4 task-item">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">Thing 1<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Thing 2<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Done</button>
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 3<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 4<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
            <li className="list-group-item disabled d-flex justify-content-between align-items-center" aria-disabled="true">Thing 5<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary">Edit</button>
              <button type="button" class="btn btn-secondary">Delete</button>
            </div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

