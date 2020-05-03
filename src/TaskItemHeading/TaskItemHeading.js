import React from 'react';
import './TaskItemHeading.css';

function TaskItemHeading() {
  return (
    <div className="container task-item-heading">
        <div className="row">
            <div className="col-12 col-sm-4 listOfThings">
                <div className="list_heading">You have <strong>2 URGENT</strong> things to do!</div>
            </div>
            <div className="col-12 col-sm-4 listOfThings">
                <div className="list_heading">You have <strong>2 important </strong> things to do!</div>
            </div>
            <div className="col-12 col-sm-4 listOfThings">
                <div className="list_heading">You have <strong>2 non-urgent </strong> things to do!</div>
            </div>
        </div>
    </div>
  );
}

export default TaskItemHeading;




