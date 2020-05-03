import React from 'react';
import './TaskInput.css';

function TaskInput() {
  return (
    <div className="task-input">
  
      <div className="container">
        <div className="input-group">
          <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="What do you need to do?"></input>
          <div className="input-group-append">
            <select className="custom-select" id="inputGroupSelect02">
              <option selected>How urgent is it?</option>
              <option value="1">Urgent</option>
              <option value="2">Important</option>
              <option value="3">Non-urgent</option>
            </select>
          </div>
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button" id="button-addon2">Add</button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default TaskInput;