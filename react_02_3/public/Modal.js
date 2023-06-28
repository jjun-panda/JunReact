function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const cancelModal = () => {
    setIsOpen(false);
  };
  // onClick={() => alert('앗! 해결중입니다! 잠시 기다려주세요 :/')}

  return (
    <>
      <span onClick={openModal}>00</span>
      {isOpen && (
        <div className="modal">
          <div className="modalContent">
            <p className="titleModal">00</p>
            <p className="textModal">00</p>
            {/* <input 
              type="text"
              value={00}
              onChange={00}
              placeholder="~입력하세요"
              minLength={1}
              required
            /> */}
            <div className="twoBtn">
              <button onClick={00}>00</button>
              <button onClick={cancelModal}>00</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
