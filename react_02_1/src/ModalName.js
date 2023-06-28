import { useState } from "react";
import './style/scss/modal.scss';
import modalIcon from "./img/ico_success_fill.svg";

function ModalName() {

  const [newName, setNewName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const name = '홍길동';

  const openModal = () => {
    setIsOpen(true);
  };
  const cancelModal = () => {
    setIsOpen(false);
  };

  //  이름 추가
  const AppendName = () => {
      setIsOpen(false);
  };

  // 이름 변경
  // const NewNamehange = useCallback(e => {
  //   console.log(name);
  //   setNewName(e.target.defaultValue);
  //   setIsOpen(false);
  // }, []);

  const NewNameChange = (e) => {
      console.log(name);
      console.log(newName);
      setNewName(e.target.value);
          // setIsOpen(false);
  };

  // const confirmPop = useConfirm("앗! 해결중입니다.<br/>>잠시 기다려주세요 :/");
  
  return (
    <>
      <p className="name"><span onClick={openModal}>{name}</span>님의 <br />하루 계획 일정입니다!</p>
      {isOpen && (
        <div className="modal">
          <div className="modalContent">
            <img src={modalIcon} alt="" className="modalIcon"/>
            <p className="titleModal">당신의 이름은 무엇인가요?</p>
            {/* <p className="textModal">오늘 하루도 힘내자!</p> */}
            <input 
              type="text"
              defaultValue={newName}
              name="홍길동"
              onChange={NewNameChange}
              placeholder="이름을 입력해주세요"
              className="textBox"
              minLength={1}
              // required
            />
            <div className="twoBtn">
              <button onClick={AppendName}>확인</button>
              <button onClick={cancelModal} className="cance">취소</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalName;
