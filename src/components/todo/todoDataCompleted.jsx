import React from 'react'

export const TodoDataCompleted = (props) => {

  const Lists = props.Lists;
  const DeleteTask = (id) => {
    console.log("🚀 ~ DeleteTask ~ id:", id)
    return props.DeleTeTask(id);
};
  
  return (
  <>
    <div className="todo_data">
    <h3 className='font-size: 20px;'> Task Complete : </h3>
      <ul>
        {Lists.map((task, index) => (
          <li className="task_completed" key={index}>
            <div className="task-left">
              <input type="checkbox" className="circle-checkbox" defaultChecked onChange={(event)=> event.target.checked && DeleteTask(task.id)}/>
              <span>{task.nameTask}</span>
            </div>
            <i className="bi bi-journal-text text-xl"></i>
          </li>
        ))}
      </ul>
      </div>
  </>
  );
}
