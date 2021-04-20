import React from "react";
import "../../assets/confirmModal/style.css";

function ConfirmModal({ handleDelete, id }) {
	function _handleHideModal() {
		const modal = document.querySelectorAll(".confirm-modal")[id];
		modal.style.display = "none";
		const card = document.querySelectorAll(".card-content")[id];
		card.style.display = "flex";
	}

	function _handleConfirm() {
		_handleHideModal();
		handleDelete(id);
	}

	return (
		<section className="confirm-modal" data-id={id}>
			<h3 className="title-confirm-modal">Atenção!</h3>
			<p className="description-confirm-modal">
				Você tem certeza que deseja excluir esta tarefa?
			</p>
			<section className="buttons-confirm-modal">
				<button className="cancel-button-modal" onClick={_handleHideModal}>
					Não
				</button>
				<button className="confirm-button-modal" onClick={_handleConfirm}>
					Sim
				</button>
			</section>
		</section>
	);
}

export default ConfirmModal;
