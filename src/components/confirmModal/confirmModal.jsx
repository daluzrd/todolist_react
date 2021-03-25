import React, { Component } from "react";
import "../../assets/confirmModal/style.css"

class ConfirmModal extends Component{

    _handleCloseModal(){
        const modal = document.querySelectorAll(".confirm-modal")[this.props.id];
        modal.style.display = "none";
        const card = document.querySelectorAll(".card-content")[this.props.id];
        card.style.display = "flex";
    }

    _handleCancel(){
        this._handleCloseModal();
    }

    _handleConfirm(){
        this._handleCloseModal();
        this.props.handleDelete(this.props.id);
    }

    render(){
        return(
            <section className="confirm-modal" data-id={this.props.id}>
                <button className="close-button-modal" onClick={this._handleCloseModal.bind(this)}>x</button>
                <h3 className="title-confirm-modal">Atenção!</h3>
                <p className="description-confirm-modal">Você tem certeza que deseja excluir esta tarefa?</p>
                <section className="buttons-confirm-modal">
                    <button className="cancel-button-modal" onClick={this._handleCancel.bind(this)}>Não</button>
                    <button className="confirm-button-modal" onClick={this._handleConfirm.bind(this)}>Sim</button>
                </section>
            </section>
        );
    }
}


export default ConfirmModal;
