
import TodoList from "./TodoList";
import { useState } from "react";

function Home() {
  const [todoList, setTodoList] = useState([
    { seq: 1, work: "설거지하기", done: false },
    { seq: 2, work: "빨래하기", done: false },
    { seq: 3, work: "청소하기", done: true },
  ]);

  return (
    <div className="container">
      <div className="post">
        <div className="todoBox">
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </div>
  );
}

export default Home;
