import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const TodoNew = (props) => {

  const [valueInput, setValueInput] = useState("");
  const handleClick = () => {
    props.addNewTodo(valueInput);
    setValueInput("")
  }

  const handleOnChange = (task) => {
    setValueInput(task);
  }

  return (
    <div className="input_text">
      <input type="text" placeholder="Enter your task" onChange={(event) => handleOnChange(event.target.value)} value={valueInput} onKeyDown={(e) => {
        if (e.key === "Enter") handleClick();
      }}
      />
      <button onClick={handleClick}> Add</button>
    </div>
  )
}

export default TodoNew