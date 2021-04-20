import React, { useState, useEffect } from "react";
import RegisterForm from "./components/registerForm/";
import TaskList from "./components/taskList/";
import DataTasks from "./data/Tasks.js";
import "./assets/App/style.css";
import DataCategories from "./data/Categories";
import CategoryList from "./components/categoryList/categoryList";

function App() {
	const dataCategories = new DataCategories();
	const [categoryList, setCategoryList] = useState(
		dataCategories.getCategoriesOnStorage()
	);
	const dataTasks = new DataTasks();
	const [taskList, setTaskList] = useState(dataTasks.getTasksOnStorage());

	function handleCategorySubmit(category, id) {
		setCategoryList([...categoryList, category]);
	}

	function handleCategoryDelete(id) {
		const newCategoryList = categoryList.slice();
		newCategoryList.slice(id, 1);
		setTaskList(newCategoryList);
	}

	function handleCreateCategory(category) {
		setCategoryList([...categoryList, category]);
	}

	function handleTaskSubmit(task) {
		setTaskList([...taskList, task]);
	}

	function handleTaskDelete(id) {
		const newTaskList = taskList.slice();
		newTaskList.splice(id, 1);
		setTaskList(newTaskList);
	}

	useEffect(() => {
		dataTasks.saveTasksOnStorage(taskList);
	}, [taskList]); //eslint-disable-line

	useEffect(() => {
		dataCategories.saveCategoriesOnStorage(categoryList);
	}, [categoryList]); //eslint-disable-line

	return (
		<div className="App">
			<RegisterForm
				className="register-form"
				handleTaskSubmit={handleTaskSubmit}
			></RegisterForm>
			<CategoryList
				className="category-list"
				categoryList={categoryList}
				handleCategorySubmit={handleCategorySubmit}
				handleCategoryDelete={handleCategoryDelete}
				handleCreateCategory={handleCreateCategory}
				handleTaskSubmit={handleTaskSubmit}
				handleTaskDelete={handleTaskDelete}
			/>
			{/* <TaskList
				className="task-list"
				taskList={taskList}
				handleTaskDelete={handleTaskDelete}
			/> */}
		</div>
	);
}

export default App;
