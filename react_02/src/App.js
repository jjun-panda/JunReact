import logo from './img/logo.svg';
import TodoList from './TodoList';
import MyTbl from './MyTbl';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function App() {

const [todoList, setTodoList] = useState([
  {seq:1, work:'BX DESIGNN', done:false},
  {seq:2, work:'UX DESIGNN', done:false},
  {seq:3, work:'UI DESIGNN', done:false},
  {seq:4, work:'WEB DESIGNN', done:true},
  {seq:5, work:'DESIGN PROJECT', done:true}
]);

const [todoDay, setTodoDay] = useState([
  {seq:1, work:'JAVA', done:false},
  {seq:2, work:'Python', done:false},
  {seq:3, work:'Node.js', done:false},
  {seq:4, work:'Django', done:true},
  {seq:5, work:'React.js', done:true}
]);

const myArray = [
  {seq:1, name:'BX DESIGNN', price:1000},
  {seq:2, name:'UX DESIGNN', price:2000},
  {seq:3, name:'UI DESIGNN', price:3000},
  {seq:4, name:'WEB DESIGNN', price:5000}
];

const[seqCnt, setSeqCnt] = useState(7);

function append(newWork) {
  var newitem = {
    seq:seqCnt, 
    work:newWork, 
    done:false
  };
  setSeqCnt(seqCnt + 1);
  var list = [...todoList, newitem];
  setTodoList(list);
}

  return (
    <>
      <h1 style={{fontSize:'4rem'}}>5교시 시작!</h1>
      <hr />
      <p>react = html + js - &amp; .jsx</p>
      <img src={logo} alt="logo" className='bodyImg' style={{width:'calc(100% / 5 * 2)'}} />
      <TodoList todoList={todoList} appendFn={append} />
      <MyTbl myArray={myArray} />
    </>
  );
}

export default App;
