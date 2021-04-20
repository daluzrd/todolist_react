import React, { useState } from "react";
import { Category } from "../../data/Categories";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import TaskList from "../taskList";

export default function CategoryCard({
	category,
	id,
	handleCategorySubmit,
	handleCategoryDelete,
	handleTaskSubmit,
	handleTaskDelete,
}) {
	const [title, setTitle] = useState(category.title);
	const [taskList, setTaskList] = useState(category.taskList);

	function _handleChangeTitle(newTitle) {
		setTitle(newTitle);
	}

	function _handleCategoryDelete() {
		handleCategoryDelete(id);
	}

	function _handleCategorySubmit() {
		handleCategorySubmit(new Category(title, taskList), id);
	}

	return (
		<li key={id}>
			<DeleteSVG
				className="task-card-delete"
				onClick={(event) => {
					event.preventDefault();
					_handleCategoryDelete();
				}}
			/>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					event.stopPropagation();
					_handleCategorySubmit();
				}}
			>
				<input
					value={category.title}
					onChange={(event) => {
						event.preventDefault();
						_handleChangeTitle(event.target.value);
					}}
				/>
			</form>
			<TaskList tasks={taskList} />
		</li>
	);
}
