import React, { Component } from "react";
import "../../assets/taskCard/style.css";

class TaskCard extends Component {

    _handleDelete(event){
        event.preventDefault();
        event.stopPropagation();
    }

    render() {
        return (
            <section className="card-task-card">
                <button className="task-card-delete">x</button>
                <h3 className="title-task-card">{this.props.task.title}</h3>
                <p className="description-task-card">
                    {this.props.task.description}
                </p>
            </section>
        );
    }
}

export default TaskCard;