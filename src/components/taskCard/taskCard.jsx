import React, { Component } from "react";
import ConfirmModal from "../confirmModal/";
import "../../assets/taskCard/style.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class TaskCard extends Component {
	_handleDelete() {
		const modal = document.querySelectorAll(".confirm-modal")[this.props.id];
		modal.style.display = "block";
		const card = document.querySelectorAll(".card-content")[this.props.id];
		card.style.display = "none";
	}

	handleDelete(id) {
		this.props.handleDelete(id);
	}

	render() {
		return (
			<section className="card-task-card">
				<ConfirmModal
					id={this.props.id}
					handleDelete={this.props.handleDelete.bind(this)}
				></ConfirmModal>
				<section className="card-content">
					<DeleteSVG
						className="task-card-delete"
						onClick={() => {
							this._handleDelete(this.props.id);
						}}
					/>
					<h3 className="title-task-card">{this.props.task.title}</h3>
					<p className="description-task-card">{this.props.task.description}</p>
				</section>
			</section>
		);
	}
}

export default TaskCard;
