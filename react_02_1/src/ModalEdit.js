import { useState } from "react";
import './style/scss/modal.scss';
import editIcon from "./img/ico_writing.svg";
import checkIcon from "./img/ico_check.svg";

function ModalEdit({ setTodos, todo }) {
  const [editingNum, setEditingNum] = useState(null);
  const [editedWork, setEditedWork] = useState(todo.work);

  // 할일 수정
  const startEditing = (num) => {
    setEditingNum(num);
    setEditedWork(todo.work);
  };

  // 할일 변경 저장
  const finishEditing = (num) => {
    setEditingNum(null);
    setTodos((todoList) =>
      todoList.map((todoItem) =>
      todoItem.num === num ? { ...todoItem, work: editedWork } : todoItem
      )
    );
  };


  // 할일 변경
  const handleEditChange = (e) => {
    setEditedWork(e.target.value);
  };
  return (
    <>
      {editingNum === todo.num ? (
        <>
          <input 
          className="text edit"
          type="text"
          value={editedWork}
          onChange={handleEditChange}
          />
          <div className="listBtn" onClick={() => finishEditing(todo.num)}>
            <img className="checkIcon" src={checkIcon} alt="확인" title="확인" />
          </div>
        </>
      ) : (
        <>
          <span
            className="text"
            style={
              todo.done ? { textDecoration: "line-through", color: "var(--light-text-dlsable)" } : {}}
          >
            {todo.work}
          </span>
          <div className="listBtn" onClick={() => startEditing(todo.num)}>
            <img
              className="imgIcon"
              src={editIcon}
              alt="수정"
              title="수정" 
            />
          </div>
        </>
      )}
    </>
  );
}

export default ModalEdit;
