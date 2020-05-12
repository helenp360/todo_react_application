import React from 'react';
import './TaskItemHeadingUrgent.css';

function TaskItemHeadingUrgent(props) {
  return (
    <div className="task-list-heading-urgent">
        <p>You have <strong>{ props.text } URGENT</strong><br></br>things to do!</p>
    </div>
  );
}

export default TaskItemHeadingUrgent;




// {if (urgentTasksActive.length === 0 && urgentTasksCompleted.length >=1){
//   <p>Congrats!</p>
// } else {
//   <p>You have <strong>{ props.text } URGENT </strong>things to do!</p>
// }