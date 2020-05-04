import React from 'react';
import './TaskItemHeading.css';

function TaskItemHeading() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-4 task-item-heading">
                <div className="list_heading">You have <strong>2 URGENT</strong> things to do!</div>
            </div>
            <div className="col-12 col-sm-4 task-item-heading">
                <div className="list_heading">You have <strong>4 important </strong> things to do!</div>
            </div>
            <div className="col-12 col-sm-4 task-item-heading">
                <div className="list_heading">You have <strong>2 non-urgent </strong> things to do!</div>
            </div>
        </div>
    </div>
  );
}

export default TaskItemHeading;




