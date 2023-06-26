import { useState } from "react";
import Modal from './Modal';
// import './style/css/common.css'
import './style/css/todolist.css'
import deleteIcon from "./img/ico_close_fill.svg";

function TodoList({ todoList }) {
  // 할일 새로 추가하기
  const [todos, setTodos] = useState(todoList);

  // 할일 완료 여부
  const todoToggleDone = (seq) => {
    setTodos((todoCheck) =>
      todoCheck.map((todo) =>
        todo.seq === seq ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 할일 삭제
  const todoDelete = (seq) => {
    setTodos((todoCheck) =>
      todoCheck.filter((todo) =>
        todo.seq !== seq
      )
    );
  };

  var name = 'JJUN';

  return (
    <>
      <div className="titlayout">
        <p className='name'><span>{name}</span>님의 <br />하루 계획 일정입니다!</p>
        <Modal todoList={todoList} setTodoList={setTodos} />
      </div>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.seq}>
            <p>
              <label className="label">
                <input 
                  type="checkbox" 
                  checked={todo.done}
                  onChange={() => todoToggleDone(todo.seq)}
                  className="checkBox" 
                />
                <em></em><span className="done">{todo.done ? "완료" : "미완료"}</span><span className="text"  style={todo.done ? { textDecoration: "line-through", color: "var(--light-text-dlsable)" } : {}}>{todo.work}</span>
                <span onClick={() => todoDelete(todo.seq)} className="iconImg"><img src={deleteIcon} /></span>
              </label>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
