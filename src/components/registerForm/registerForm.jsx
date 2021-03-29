import React, { Component } from "react";
import "../../assets/registerForm/style.css";

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.title = "";
		this.description = "";
	}

	_handleChangeTitle(event) {
		event.stopPropagation();
		this.title = event.target.value;
	}

	_handleChangeDescription(event) {
		event.stopPropagation();
		this.description = event.target.value;
	}

	_handleSubmit(event) {
		event.preventDefault();
		event.stopPropagation();

		this.props.handleSubmit(this.title, this.description);
	}

	render() {
		return (
			<section>
				<form
					className="form-register-form"
					onSubmit={this._handleSubmit.bind(this)}
				>
					<section className="form-register-titulo">
						<label>Título</label>
						<input
							maxLength="72"
							onChange={this._handleChangeTitle.bind(this)}
						></input>
					</section>
					<section className="form-register-descricao">
						<label>Descrição</label>
						<textarea
							rows="5"
							wrap="hard"
							maxLength="109"
							onChange={this._handleChangeDescription.bind(this)}
						></textarea>
					</section>
					<button className="form-register-button">Salvar Tarefa</button>
				</form>
			</section>
		);
	}
}

export default RegisterForm;
