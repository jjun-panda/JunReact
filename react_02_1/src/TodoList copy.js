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
