import { useState } from "react";
import './style/scss/modal.scss';
import errorIcon from "./img/ico_error_fill.svg";
import deleteIcon from "./img/ico_delete.svg";

function ModalDelete({setTodos, todo}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const cancelModal = () => {
    setIsOpen(false);
  };

  // 할일 삭제
  const todoDelete = (num) => {
    setTodos((todoCheck) =>
      todoCheck.filter((todo) =>
        todo.num !== num
      )
    );
  };

  return (
    <>
      <a className="listBtn" onClick={openModal}><img className="imgIcon" src={deleteIcon} alt="삭제" title="삭제" /></a>
        {isOpen && (
          <div className="modal">
            <div className="modalContent ws20">
              <img src={errorIcon} alt="" className="modalIcon"/>
              <p className="titleModal">정말로 삭제하겠습니까?</p>
              <p className="textModal">해당 리스트는 삭제되며 복구할 수 없습니다.</p>
              <div className="twoBtn">
                <button onClick={() => todoDelete(todo.num)}>삭제</button>
                {/* <span onClick={() => todoDelete(todo.num)} className="iconImg"><img src={deleteIcon} />삭제</span> */}
                <button onClick={cancelModal} className="cance">취소</button>
              </div>
            </div>
          </div>
        )}
    </>
  );
}

export default ModalDelete;
