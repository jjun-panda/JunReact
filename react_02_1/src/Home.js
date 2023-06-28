import TodoList from './TodoList';
import Bar from './Bar';
import './style/scss/home.scss';

function Home() {
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
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default Home;
