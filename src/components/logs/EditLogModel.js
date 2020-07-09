import React, { useState, useEffect } from "react";
import TechSelectOptions from "../techs/TechSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logActions";

/* Responsavel por editar um chamado já existente  */
const EditLogModal = ({ current, updateLog }) => {
  /*adiciona o estado aos um componentes */

  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  /* Tem a mesma finalidade do componentDidMount, componentDidUpdate e componentWillUnmount */
  /* Permite atualização dos estados */
  useEffect(() => {
    //se current for diferente de vazio
    if (current) {
      //atualiza menssagem
      setMessage(current.message);
      //atualiza attention
      setAttention(current.attention);
      //atualiza tech
      setTech(current.tech);
    }
  }, [current]);

  /**ao precionar o botão enter chama a função onSumbmit*/
  const onSubmit = () => {
    /* Se os campos de mensagem ou o técnico estiverem vazios apresenta a mensagem de erro*/
    if (message === "" || tech === "") {
      M.toast({ html: "Por favor digite a mensagem e o técnico" });
    } else {
      /*Caso contrario será criado um objeto com id, mensagem, atenção, técnico e data e hora atual (objeto) */
      //console.log(message, tech, attention);
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      //envia o objeto updLog para a função updateLog que esta em logAction.js
      updateLog(updLog);
      M.toast({ html: `Chamado atualizado por ${tech}` });

      //Limpa os campos
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4> Entre no sistema Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Selecionar Técnico
              </option>
              <TechSelectOptions />
              {/*
               <option value="John Doe"> John Doe</option>
              <option value="Sam Smith"> Sam Smith</option>
              <option value="Sara Wilson"> Sara Wilson</option> 
              */}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Necessita de atenção</span>
              </label>
            </p>
          </div>
        </div>
      </div>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
