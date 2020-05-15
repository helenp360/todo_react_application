import React from 'react';
import './TaskItemHeadingUrgent.css';

function TaskItemHeadingUrgent(props) {
  return (
    <div className="task-list-heading-urgent">
        <h2>You have <strong>{ props.text } URGENT</strong><br></br>things to do!</h2>
    </div>
  );
}

export default TaskItemHeadingUrgent;

