import React, { Component } from "react";
import TaskCard from "../taskCard/";
import "../../assets/taskList/style.css";

class TaskList extends Component {
    render() {
        return (
            <section>
                <ul className="list-task-list">
                    {this.props.taskList.map((task, index) => {
                        return(
                            <li key={index} className="item-task-list">
                                <TaskCard className="task-card" task={task}>
                                </TaskCard>
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default TaskList;