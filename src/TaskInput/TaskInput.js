import React, { useState } from 'react';
import './TaskInput.css';

function TaskInput() {
  const [text, setText] = useState("");
  const [urgency, setUrgency] = useState(""); //number?

  function handleTextChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  function handleUrgencyChange(event) { //up to 25:48 in video
    console.log(event.target.value);
    setUrgency(event.target.value);
  }
  
  return (
    <div className="task-input">
  
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with dropdown button"
            placeholder="What?"
            onChange={ handleTextChange }
            value={ text }
            />
      
          <div className="input-group-append">
            <select
              className="custom-select" id="inputGroupSelect02"
              onChange={ handleUrgencyChange }
              value={ urgency }>
              <option defaultValue>How urgent is it?</option>
              <option value="1">Urgent</option>
              <option value="2">Important</option>
              <option value="3">Non-urgent</option>
              
            </select>
          </div>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button" id="button-addon2">Add</button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default TaskInput;