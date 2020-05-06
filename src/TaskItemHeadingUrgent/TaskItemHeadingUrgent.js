import React from 'react';
import './TaskItemHeadingUrgent.css';

function TaskItemHeadingUrgent(props) {
  return (
    <div className="task-list-heading-urgent">
        <p>You have <strong>{ props.text } URGENT </strong>things to do!</p>
    </div>
  );
}

export default TaskItemHeadingUrgent;




