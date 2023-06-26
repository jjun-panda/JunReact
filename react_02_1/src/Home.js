import logo from './img/logo.svg';
import TodoList from './TodoList';
import Bar from './Bar';
import './style/css/home.css';
import { useState } from 'react';

function Home() {
  const [todoList, setTodoList] = useState([
    {seq:1, work:'설거지하기', done:false}
  ]);
  
  return (
    <div className='container'>
      <div className='post'>
        {/* headerBat */}
        <div className='headerBar'>
          <Bar />
        </div>
        {/* post box */}
        <div className='todoBox'>
          {/* <img src={logo} className="logoImg" alt="logo" /> */}
          <TodoList todoList={todoList} />
        </div>
      </div>
    </div>
  );
}

export default Home;
