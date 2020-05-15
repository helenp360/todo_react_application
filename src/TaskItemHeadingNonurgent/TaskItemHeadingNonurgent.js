import React from 'react';
import './TaskItemHeadingNonurgent.css';

function TaskItemHeadingNonurgent(props) {
  return (
    <div className="task-list-heading-urgent">
        <h2>You have <strong>{ props.text } non-urgent</strong><br></br>things to do!</h2>
    </div>
  );
}

export default TaskItemHeadingNonurgent;
