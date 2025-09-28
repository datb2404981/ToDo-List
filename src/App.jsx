import "./components/todo/todo.scss"
import { TodoData } from "./components/todo/todoData";
import TodoImg from "./components/todo/todoImg";
import TodoNew from "./components/todo/todoNew";
import { useState } from "react";

function App() {

  const [Lists, setLists] = useState([]);
  
  const addNewTodo = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
      nameTask: task,
    };

    setLists([...Lists, newTask]);
  }

  return (
    <>
      <div className="todo_list">
        Todo List
      </div>
      <TodoNew addNewTodo={addNewTodo} />
      {(Lists.length === 0) ? <TodoImg /> : <TodoData Lists={ Lists } />}
      
      
    </>
  );
}

export default App
