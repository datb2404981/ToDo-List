import "./todo.scss";
import { TodoData } from "./todoData";
import { TodoDataCompleted } from "./todoDataCompleted";
import TodoImg from "./todoImg";
import TodoNew from "./todoNew";
import { useEffect, useState } from "react";

const ToDoApp = () => {
  const [Lists, setLists] = useState([]);

  const addNewTodo = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
      nameTask: task,
    };

    setLists([...Lists, newTask]);
  };

  const [idDelete, setIdDelete] = useState("");
  const [taskCompleted, setTaskCompleted] = useState([]);
  const checkTask = () => {
    if (idDelete !== "") {
      const completedTask = Lists.filter((t) => t.id === idDelete);
      setTaskCompleted([...taskCompleted, ...completedTask]);
      setLists(Lists.filter((t) => t.id !== idDelete));
      setIdDelete("");
    }
  };
  useEffect(() => {
    checkTask();
  }, [idDelete]);

  return (
    <div>
      <div className="todo_list">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {Lists.length === 0 && taskCompleted.length === 0 ? (
        <TodoImg />
      ) : (
        <TodoData Lists={Lists} DeleTeTask={setIdDelete} />
      )}

      {taskCompleted.length !== 0 && (
        <TodoDataCompleted Lists={taskCompleted} />
      )}
    </div>
  );
};

export default ToDoApp;
