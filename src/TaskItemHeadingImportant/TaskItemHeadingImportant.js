import React from 'react';
import './TaskItemHeadingImportant.css';

function TaskItemHeadingImportant(props) {
  return (
    <div className="task-list-heading-urgent">
        <p>You have <strong>{ props.text } important</strong><br></br>things to do!</p>
    </div>
  );
}

export default TaskItemHeadingImportant;
