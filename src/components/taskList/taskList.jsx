import React from "react";
import TaskCard from "../taskCard/";
import "../../assets/taskList/style.css";

function TaskList({ taskList, handleDelete }) {
	return (
		<section>
			<ul className="list-task-list">
				{taskList.map((task, index) => {
					return (
						<li key={index} className="item-task-list">
							<TaskCard
								className="task-card"
								task={task}
								id={index}
								handleDelete={handleDelete}
							></TaskCard>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default TaskList;
