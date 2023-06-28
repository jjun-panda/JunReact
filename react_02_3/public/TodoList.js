import { useState } from "react";

function TodoList({todoList, setTodoList}) {
  const [newWork, setNewWork] = useState("");
  const [editingSeq, setEditingSeq] = useState(null);

  // 할일 추가
  const todoAppendWork = () => {
    if (newWork.trim() !== "") {
      setTodoList((todoCheck) => [
        ...todoCheck,
        {seq: todoCheck.length+1, work: newWork, done: false}
      ]);
      setNewWork("");
    }
  };

  // 할일 수정
  const startEditing = (seq) => {
    setEditingSeq(seq);
  };

  // 할일 변경 저장
  const finishEditing = (seq) => {
    setEditingSeq(null);
  };

  const handleEditChange = (e, seq) => {
    const editedWork = e.target.value;
    setTodoList((todoCheck) =>
      todoCheck.map((todo) =>
        todo.seq === seq ? {...todo, work: editedWork} : todo
      )
    );
  };

  // 할일 변겅
  const todoNewWorkChange = (e) => {
    setNewWork(e.target.value);
  };

  const todoToggleDone = (seq) => {
    setTodoList((todoCheck) =>
    todoCheck.map((todo) =>
    todo.seq === seq ? {...todo, done: !todo.done} : todo
    )
    );
  };

  // 할일 삭제
  const todoDelete = (seq) => {
    setTodoList((todoCheck) =>
      todoCheck.filter((todo) =>
        todo.seq !== seq
      )
    );
  };

  return (
    <>
      <input 
      type="text" 
      value={newWork}
      onChange={todoNewWorkChange}
      placeholder=" 할일을 입력해주세요"
      minLength={1}
      required
      />
      <button onClick={todoAppendWork}>추가</button>
      <hr/>
      <ul>
        {todoList.map((todo) => (
        <li key={todo.seq}>
          <label>
            <input 
            type="checkbox"
            checked={todo.done}
            onChange={() => todoToggleDone(todo.seq)}
            />
            <span>{todo.done ? "완료" : "미완료"}</span>
            
            {editingSeq === todo.seq ? (
              <>
                <input 
                type="text"
                value={todo.work}
                onChange={(e) => handleEditChange(e, todo.seq)}
                />
                <button onClick={() => finishEditing(todo.seq)}>확인</button>
              </>
            ) : (
              <>
                <span
                style={ todo.done ? { textDecoration: "line-through", color: "gray"} : {}}>
                  {todo.work}
                </span>
                <button onClick={() => startEditing(todo.seq)}>수정</button>
              </>
            )}
            <button onClick={() => todoDelete(todo.seq)}>삭제</button>
          </label>
        </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
