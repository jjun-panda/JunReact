import { useState } from "react";

function TodoList({ todoList, setTodoList }) {
	const [newWork, setNewWork] = useState("");
	const [editingSeq, setEditingSeq] = useState(null);

	// 할일 추가
	const todoAppendWork = () => {
		if (newWork.trim() !== "") {
		setTodoList((todoCheck) => [
			...todoCheck,
			{ seq: todoCheck.length + 1, work: newWork, done: false },
		]);
		setNewWork("");
		}
	};

	// 할일 수정
	const startEditing = (seq) => {
		setEditingSeq(seq);
	};

	const finishEditing = (seq) => {
		setEditingSeq(null);
	};

	const handleEditChange = (e, seq) => {
		const editedWork = e.target.value;
		setTodoList((prevTodoList) =>
		prevTodoList.map((todo) =>
			todo.seq === seq ? { ...todo, work: editedWork } : todo
		)
		);
	};

	// 할일 변경
	const todoNewWorkChange = (e) => {
		setNewWork(e.target.value);
	};
	
	// 할일 변경
	const todoToggleDone = (seq) => {
		setTodoList((todoCheck) =>
		todoCheck.map((todo) =>
			todo.seq === seq ? { ...todo, done: !todo.done } : todo
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

	const name = 'jjun';
	return (
		<>
		<p className="name">
			<span>{name}</span>님의 <br />하루 계획 일정입니다!
		</p>
		<input 
			type="text"
			value={newWork}
			onChange={todoNewWorkChange}
			placeholder="할일을 입력해주세요"
			className="textBox"
			minLength={1}
			required
		/>
		<button onClick={todoAppendWork}>추가</button>
		<ul className="todoList">
			{todoList.map((todo) => (
			<li key={todo.seq}>
				<p>
				<label className="label">
					<input 
					type="checkbox" 
					checked={todo.done}
					onChange={() => todoToggleDone(todo.seq)}
					className="checkBox" 
					/>
					<em></em>
					<span className="done">{todo.done ? "완료" : "미완료"}</span>
					{editingSeq === todo.seq ? (
					<>
						<input
						type="text"
						value={todo.work}
						onChange={(e) => handleEditChange(e, todo.seq)}
						/>
						<button onClick={() => finishEditing(todo.seq)}>
						확인
						</button>
					</>
					) : (
					<>
						<span
						className="text"
						style={ todo.done ? { textDecoration: "line-through", color: "gray", }: {} }
						>
						{todo.work}
						</span>
						<button onClick={() => startEditing(todo.seq)}>
						수정
						</button>
					</>
					)}
					<button onClick={() => todoDelete(todo.seq)}>삭제</button>
				</label>
				</p>
			</li>
			))}
		</ul>
		</>
	);
}

export default TodoList;
