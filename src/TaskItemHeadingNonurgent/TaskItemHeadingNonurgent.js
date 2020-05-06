import React from 'react';
import './TaskItemHeadingNonurgent.css';

function TaskItemHeadingNonurgent(props) {
  return (
    <div className="task-list-heading-urgent">
        <p>You have <strong>{ props.text } non-urgent </strong>things to do!</p>
    </div>
  );
}

export default TaskItemHeadingNonurgent;
