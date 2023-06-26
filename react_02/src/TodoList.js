import { useState } from "react";

function TodoList({todoList}) {
    // 할일 새로 추가
    const [newWork, setNewWork] = useState("");
    const [todos, setTodos] = useState(todoList);

    // 할일 변경
    const todoNewWorkChange = (e) => {
        setNewWork(e.target.value);
    };

    // 할일 추가
    const todoAppendWork = () => {
        // 앞뒤 공백 제거
        if (newWork.trim() !== "") {
        setTodos((prevTodos) => [
            ...prevTodos,
            { seq: prevTodos.length + 1, work: newWork, done: false },
        ]);
        setNewWork("");
        }
    };

    // 할일 완료여부
    const todoToggleDone = (seq) => {
        setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.seq === seq ? { ...todo, done: !todo.done } : todo
        )
        );
    };

    // 할일 삭제
    const todoDelete = (seq) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.seq !== seq));
    };

    return (
        <>
        <p>
            <input 
                type="text" 
                value={newWork} 
                onChange={todoNewWorkChange}
                placeholder="할일을 입력해주세요"
            />
            <button onClick={todoAppendWork}>할일 추가</button>
        </p>
        <ul>
            {todos.map((todo) => (
            <li key={todo.seq}>
                {/* 할일 완료시 취소선 */}
                <p style={todo.done ? { textDecoration: "line-through" } : {}}>
                <input
                type="checkbox"
                checked={todo.done}
                onChange={() => todoToggleDone(todo.seq)}
                />
                {todo.seq}: {todo.work} ({todo.done ? "완료" : "미완료"})
                <button onClick={() => todoDelete(todo.seq)}>삭제</button>
                </p>
            </li>
            ))}
        </ul>
        </>
    );
}

export default TodoList;
