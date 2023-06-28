import { useEffect, useState } from "react";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import ModalName from "./ModalName";
import "./style/scss/todolist.scss";

function TodoList() {
  const [todoList, setTodoList] = useState([
    { num: 1, work: "설거지하기", done: false },
    { num: 2, work: "빨래하기", done: false },
    { num: 3, work: "청소하기", done: true }
  ]);
  const [numCnt, setNumCnt] = useState(todoList.length);
  const [todos, setTodos] = useState(todoList);

  // TodoList가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    const localStorageData = localStorage.getItem("todoListData");
    if (localStorageData) {
      const localStorageObj = JSON.parse(localStorageData);
      setTodoList(localStorageObj.todoList);
      setNumCnt(localStorageObj.numCnt);
      setTodos(localStorageObj.todoList);
    } else {
      setTodos(todoList);
    }
  }, []);

  // localStorage에 저장하는 기능
  function saveLocalStorage(newCnt, newList) {
    if (newList) {
      const localStorageObj = { numCnt: newCnt, todoList: newList };
      localStorage.setItem("todoListData", JSON.stringify(localStorageObj));
    }
  }

  // 할일 새로 추가하기
  const addTodo = (newWork) => {
    const newTodo = { num: numCnt, work: newWork, done: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setNumCnt(numCnt + 1);
    saveLocalStorage(numCnt + 1, newTodos); // Update localStorage data
  };

  // 할일 완료 여부
  const todoToggleDone = (num) => {
    setTodos((todoCheck) =>
      todoCheck.map((todo) =>
        todo.num === num ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 날짜 & 시간
  const moment = require('moment');
  require('moment/locale/ko');
  const date = new Date();
  const formattedDate = moment(date).locale('ko').format('L dddd');

  return (
    <>
      <nav className="btnMain">
        <ul className="list-none">
          <li>
            <ModalAdd todoList={todoList} setTodos={setTodos} />
          </li>
        </ul>
      </nav>
      <p className="dayNum">{formattedDate}</p>
      <div className="titlayout">
        <div>
          <ModalName />
        </div>
      </div>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.num}>
            <p>
              <label className="label">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => todoToggleDone(todo.num)}
                  className="checkBox"
                />
                <em></em>
                <span className="done">{todo.done ? "완료" : "미완료"}</span>
              </label>
              <ModalEdit setTodos={setTodos} todo={todo} />
              <ModalDelete setTodos={setTodos} todo={todo} />
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;