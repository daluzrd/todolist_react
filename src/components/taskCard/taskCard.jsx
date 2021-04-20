import React from "react";
import ConfirmModal from "../confirmModal/";
import "../../assets/taskCard/style.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

function TaskCard({ handleDelete, id, task }) {
	function _handleDelete() {
		const modal = document.querySelectorAll(".confirm-modal")[id];
		modal.style.display = "block";
		const card = document.querySelectorAll(".card-content")[id];
		card.style.display = "none";
	}

	return (
		<section className="card-task-card">
			<ConfirmModal
				id={id}
				handleDelete={() => {
					handleDelete(id);
				}}
			></ConfirmModal>
			<section className="card-content">
				<DeleteSVG
					className="task-card-delete"
					onClick={() => {
						_handleDelete(id);
					}}
				/>
				<h3 className="title-task-card">{task.title}</h3>
				<p className="description-task-card">{task.description}</p>
			</section>
		</section>
	);
}

export default TaskCard;
