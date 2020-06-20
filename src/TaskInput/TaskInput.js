import React from 'react';
import './TaskInput.css';

function TaskInput(props) {

  function handleAddTaskClick(event) {
    props.addTask(props.text, props.urgency);
  }
  
  return (
    <div className="task-input">
  
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="What do you need to do?"
            onChange={ props.handleTextChange }
            value={ props.text }
            />
      
          <div className="input-group-append">
            <select
              className="custom-select" id="inputGroupSelect02"
              onChange={ props.handleUrgencyChange }
              value={ props.urgency }>
              <option defaultValue>How urgent is it?</option>
              <option value="1">Urgent</option>
              <option value="2">Important</option>
              <option value="3">Non-urgent</option>
              
            </select>
          </div>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button" id="button-addon2" onClick={ handleAddTaskClick }>Add</button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default TaskInput;