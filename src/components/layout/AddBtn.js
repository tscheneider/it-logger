/* Função padrão do react */
import React from "react";

//Essa função é responsavel por criar botões
const AddBtn = () => {
  return (
    //cria o conjunto dos botões
    <div className="fixed-action-btn">
      {/* Cria o botão azul que adiciona um novo chamado */}
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        {/* cria o botão que lista os técnicos */}
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        {/* cria o botão para adicionar um novo técnicos */}
        <li>
          <a href="#add-tech-modal" className="btn-floating red modal-trigger">
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
