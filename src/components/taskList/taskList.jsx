import React, { Component } from "react";
import TaskCard from "../taskCard/";
import "../../assets/taskList/style.css";

class TaskList extends Component {
	constructor(props){
		super(props);
		debugger;
		this.tasks = this.props.tasks.taskList;
		this.state = { tasks: this.tasks };
		this._newTasks = this._newTasks.bind(this);
	}

	componentDidMount(){
		this.props.tasks.subscribe(this._newTasks)
	}

	componentWillUnmount(){
		this.props.tasks.unsubscribe(this._newTasks);
	}

	_newTasks(tasks){
		this.setState({...this.state, tasks});
	}

	render() {
		return (
			<section>
				<ul className="list-task-list">
					{this.state.tasks.map((task, index) => {
						return (
							<li key={index} className="item-task-list">
								<TaskCard
									className="task-card"
									task={task}
									id={index}
									handleDelete={this.props.tasks.handleDelete.bind(this.props.tasks)}
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
