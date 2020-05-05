import React from 'react';
import './TaskItemHeadingNonurgent.css';

function TaskItemHeadingNonurgent() {
  return (
    <div className="task-list-heading-urgent">
        <p>You have <strong>X non-urgent </strong>things to do!</p>
    </div>
  );
}

export default TaskItemHeadingNonurgent;
