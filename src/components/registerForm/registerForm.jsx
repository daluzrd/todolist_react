import React, { useState } from "react";
import "../../assets/registerForm/style.css";

function RegisterForm({ handleSubmit }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function _handleChangeTitle(event) {
		event.stopPropagation();
		setTitle(event.target.value);
	}

	function _handleChangeDescription(event) {
		event.stopPropagation();
		setDescription(event.target.value);
	}

	function _handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();

		handleSubmit(title, description);
	}

	return (
		<section>
			<form className="form-register-form" onSubmit={_handleSubmit.bind(this)}>
				<section className="form-register-titulo">
					<label>Título</label>
					<input maxLength="72" onChange={_handleChangeTitle}></input>
				</section>
				<section className="form-register-descricao">
					<label>Descrição</label>
					<textarea
						rows="5"
						wrap="hard"
						maxLength="109"
						onChange={_handleChangeDescription}
					></textarea>
				</section>
				<button className="form-register-button">Salvar Tarefa</button>
			</form>
		</section>
	);
}

export default RegisterForm;
