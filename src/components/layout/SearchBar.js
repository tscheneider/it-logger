/** React - import padrão do react, useRef */
import React, { useRef } from "react";
/* Permite a conexão utilizando o redux */
import { connect } from "react-redux";
/* permite a definição dos tipos de variaeis e funções */
import PropTypes from "prop-types";
/** importa a função que realiza a busca no BD de itens buscado pelo navbar */
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  //inicializa text com vazio (o valor de text é mutavel)
  const text = useRef("");

  /*Função que verifica o que esta sendo digitado na barra de busca do navbar */
  const onChange = (e) => {
    /* passa o valor digitado na barra de pesquisa para a função searchLogs que está em logActions.js que realizará a busca no BD*/
    searchLogs(text.current.value);
  };

  return (
    //trecho de código tirado de https://materializecss.com/navbar.html
    //alteram as class para className, for por htmlFor e acrescenta style={{ marginBottom: "30px" }} className="red"
    <nav style={{ marginBottom: "30px" }} className="red">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Busque pelo chamado..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

/* define o tipo de searchLogs */
SearchBar.prototype = {
  /* define como tipo função */
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
