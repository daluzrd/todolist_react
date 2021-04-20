import React, { useEffect, useState } from "react";
import { Task } from "../../data/Tasks";
import "../../assets/registerForm/style.css";

function RegisterForm({ handleSubmit }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (isSubmitted && title !== "") handleSubmit(new Task(title, description));
		setIsSubmitted(false);
	}, [isSubmitted]); //eslint-disable-line

	return (
		<section>
			<form
				className="form-register-form"
				onSubmit={(event) => {
					event.preventDefault();
					event.stopPropagation();
					setIsSubmitted(true);
				}}
			>
				<section className="form-register-titulo">
					<label>Título</label>
					<input
						maxLength="72"
						onChange={(event) => {
							event.stopPropagation();
							setTitle(event.target.value);
						}}
					></input>
				</section>
				<section className="form-register-descricao">
					<label>Descrição</label>
					<textarea
						rows="5"
						wrap="hard"
						maxLength="109"
						onChange={(event) => {
							event.stopPropagation();
							setDescription(event.target.value);
						}}
					></textarea>
				</section>
				<button className="form-register-button">Salvar Tarefa</button>
			</form>
		</section>
	);
}

export default RegisterForm;
