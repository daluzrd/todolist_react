import React, { Component } from "react";
import TaskCard from "../taskCard/";
import "../../assets/taskList/style.css";

class TaskList extends Component {
	handleDelete(id) {
		this.props.handleDelete(id);
	}

	render() {
		return (
			<section>
				<ul className="list-task-list">
					{this.props.taskList.map((task, index) => {
						return (
							<li key={index} className="item-task-list">
								<TaskCard
									className="task-card"
									task={task}
									id={index}
									handleDelete={this.handleDelete.bind(this)}
								></TaskCard>
							</li>
						);
					})}
				</ul>
			</section>
		);
	}
}

export default TaskList;
