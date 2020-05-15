import React from 'react';
import './TaskItemHeadingImportant.css';

function TaskItemHeadingImportant(props) {
  return (
    <div className="task-list-heading-urgent">
        <h2>You have <strong>{ props.text } important</strong><br></br>things to do!</h2>
    </div>
  );
}

export default TaskItemHeadingImportant;
