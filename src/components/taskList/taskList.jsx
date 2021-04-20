import React from "react";
import TaskCard from "../taskCard/";
import "../../assets/taskList/style.css";

function TaskList({ taskList, handleDelete }) {
	return (
		<section>
			<ul className="list-task-list">
				{taskList.map((task, index) => {
					return (
						<TaskCard
							className="task-card"
							task={task}
							id={index}
							handleDelete={handleDelete}
						></TaskCard>
					);
				})}
			</ul>
		</section>
	);
}

export default TaskList;
