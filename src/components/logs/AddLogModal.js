/**React - Padrão do react, useState -  */
import React, { useState } from "react";
import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

/* Responsavel por adicionar um novo chamado e designa a tarefa para um tecnico */
const AddLogModal = ({ addLog }) => {
  /* useState é um Hook que te permite adicionar o state do React a um componente de função.*/
  //[estado atual, função que atualiza o estado]
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  //Caso o botão de submeter seja clicado, será chamado essa função
  const onSubmit = () => {
    //Se a mensagem/tarefa ou técnico vazio
    if (message === "" || tech === "") {
      //Apresneta a mensagem de erro
      M.toast({ html: "Por favor digite a mensagem e o técnico" });
      //Se os campos já estiverem preenchido
    } else {
      //cria-se um novo objeto que possui a mensagem, se há  necessidade de atenção ou não, técnico e um objeto data(com a data e a hora que você precionar enter)
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      //manda o objeto para a função addlog em logActions.js
      addLog(newLog);

      M.toast({ html: `Chamado adicionado para ${tech}` });
      //Limpa os campos
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    /** Cria a página para adicionar o chamado */
    //modalStyle define o tamanho da modal
    <div id="add-log-modal" className="modal" style={modalStyle}>
      {/* cria container principal */}
      <div className="modal-content">
        <h4> Adicione o chamado</h4>
        {/*Cria campo para escrever o chamado */}
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message} //valor da mensagem
              //atualiza a mensagem (valor digitado em adicionar chamado)
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            <label htmlFor="message" className="active">
              Adicione o Motivo do Chamado
            </label>
          </div>
        </div>
        {/*Cria campo para de seleção de técnico */}
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech} //nome do tecnico
              className="browser-default"
              //atualiza o tecnico selecionado
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Selecionar Técnico
              </option>
              {/**Busca técnico em techSekectOptions.js e os coloca no field */}
              <TechSelectOptions />
              {/*               
              <option value="John Doe"> John Doe</option>
              <option value="Sam Smith"> Sam Smith</option>
              <option value="Sara Wilson"> Sara Wilson</option>
               */}
            </select>
          </div>
        </div>
        {/**cria o checkbox  */}
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  /**atualiza o setAttention se ele foi marcado */
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Necessita de atenção</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      {/* Cria o botão enter */}
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect red waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

//define um tipo
AddLogModal.propTypes = {
  //define o addLog como função
  addLog: PropTypes.func.isRequired,
};
/*define o tamanho da tela */
const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, { addLog })(AddLogModal);
