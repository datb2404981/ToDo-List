import React from 'react'

export const TodoData = (props) => {

  const Lists = props.Lists;

  return (
    <div className="todo_data">
      <ul>
        {Lists.map((task, index) => (
          <li className="task" key={index}>
            <div className="task-left">
              <input type="checkbox" className="circle-checkbox" />
              <span>{task.nameTask}</span>
            </div>
            <i className="bi bi-journal-text text-xl"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
