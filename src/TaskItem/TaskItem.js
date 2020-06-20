import React from 'react';
import './TaskItem.css';



function TaskItem(props) {

  function handleDeleteClick() {
    // console.log("The delete button has been clicked");
    props.deleteTask(props.id);
  }

  function handleCompleteClick() {
    props.completeTask(props.id);
  }

  function handleEditClick() {
    props.editTask(props.id);
  }
  

  return (
    <div>
    <div className={ `task-item ${ props.completed ? "task-item-complete" : "task-item-active"}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7">
            <span className="list-group-item task-item__text">{ props.text }</span>
          </div>
          <div className="col-5 task-item__buttons btn-group btn-group-sm" role="group" aria-label="Basic example">
            { props.completed === false && <button type="button" className="btn btn-secondary task__complete-button" onClick={ handleCompleteClick }>Done</button> }
            <button type="button" className="btn btn-secondary task__edit-button" onClick={ handleEditClick }>Edit</button>
            <button type="button" className="btn btn-secondary task__delete-button" onClick={ handleDeleteClick }>Delete</button>
          </div>
        </div>
      </div>
    </div>


    
</div>  
  );
}

export default TaskItem;