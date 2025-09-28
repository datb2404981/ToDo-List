import "./components/todo/todo.scss"
import { TodoData } from "./components/todo/todoData";
import TodoImg from "./components/todo/todoImg";
import TodoNew from "./components/todo/todoNew";

function App() {
  return (
    <>
      <div className="todo_list">
        Todo List
      </div>
      <TodoNew/>
      <TodoData />
      <TodoImg/>
    </>
  );
}

export default App
