import { useEffect, useState } from 'react';
import TodoList from './TodoList';

function App() {
  // const [todoList, setTodoList] = useState([
  //   { seq:1, work: '설거지하기', done:false},
  //   { seq:2, work: '빨래하기', done:false},
  //   { seq:3, work: '청소하기', done:false},
  //   { seq:4, work: '책닦기', done:false}
  // ]);
  // const [seqCnt, setSeqCnt] = useState(6);

  // useEffect(function(){
  //   const localStorageData = localStorage.getItem('todoListData');
  //   if(localStorageData) {
  //     // localStorage.getItem의 결과는 문자열이다.
  //     // JOSN.parse를 이용해 객체로 만든다.
  //     let localStorageObj = JSON.parse(localStorageData);
  //     setTodoList(localStorageObj.todoList);
  //     setSeqCnt(localStorageObj.seqCnt);
  //   }
  // }, []);

  // // localStorage에 저장 하는 기능.
  // function saveLocalStorage(newList, newCnt) {
  //   if(newList) {
  //     let localStorageObj = {seqCnt:newCnt, todoList:newList}
  //     localStorage.setItem("todoListData", JSON.stringify(localStorageObj));
  //   }
  // }

  return (
    <div>
      <p>TODO LIST</p>
      <hr/>
      {/* <TodoList saveLocalStorage={saveLocalStorage} setSeqCnt={setSeqCnt} /> */}
      <TodoList />
    </div>
  );
}

export default App;
