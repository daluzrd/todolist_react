import React, { useState, useEffect } from "react";
import RegisterForm from "./components/registerForm/";
import TaskList from "./components/taskList/";
import DataTasks from "./data/Tasks.js";
import "./assets/App/style.css";

function App() {
	const dataTasks = new DataTasks();
	const [taskList, setTaskList] = useState(dataTasks.getTasksOnStorage());

	function handleSubmit(task) {
		setTaskList([...taskList, task]);
	}

	function handleDelete(id) {
		debugger;
		const newTaskList = taskList.slice();
		newTaskList.splice(id, 1);
		setTaskList(newTaskList);
	}

	useEffect(() => {
		dataTasks.saveTasksOnStorage(taskList);
	}, [taskList]); //eslint-disable-line

	return (
		<div className="App">
			<RegisterForm
				className="register-form"
				handleSubmit={handleSubmit}
			></RegisterForm>
			<TaskList
				className="task-list"
				taskList={taskList}
				handleDelete={handleDelete}
			></TaskList>
		</div>
	);
}

export default App;
