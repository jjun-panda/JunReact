import { useState } from "react";
import './style/css/modal.css';
import modalIcon from "./img/ico_success_fill.svg";

function Modal({ todoList, setTodoList }) {
  // 할일 새로 추가하기
  const [newWork, setNewWork] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const cancelModal = () => {
    setIsOpen(false);
  };
  //  할일 추가
  const todoAppendWork = () => {
    if (newWork.trim() !== "") {
      setTodoList((todoCheck) => [
        ...todoCheck,
        { seq: todoCheck.length + 1, work: newWork, done: false },
      ]);
      setNewWork("");
      setIsOpen(false);
    }
  };

  // 할일 변경
  const todoNewWorkChange = (e) => {
    setNewWork(e.target.value);
  };

  return (
    <>
      <button onClick={openModal} className="todoBtn">할일 추가</button>
      {isOpen && (
        <div className="modal">
          <div className="modalContent">
            <img src={modalIcon} alt="" className="modalIcon"/>
            <p className="titleModal">오늘 할일은 무엇인가요?</p>
            <p className="textModal">오늘 할일은 자정되기 전까지 마무리하자!<br/>오늘 미루면 내일은 죽는다.</p>
            <input 
              type="text"
              value={newWork}
              onChange={todoNewWorkChange}
              placeholder="할일을 입력해주세요"
              className="textBox"
              minLength={1}
              required
            />
            <div className="twoBtn">
              <button onClick={todoAppendWork}>추가</button>
              <button onClick={cancelModal} className="cance">취소</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
