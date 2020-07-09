//react - padrão do react, useEffect - Segue a mesma finalidade do componentDidMount, componentDidUpdate e componentWillUnmount
import React, { useEffect } from "react";
//permite a coneção com o redux
import { connect } from "react-redux";
//permite definir o tipo da variavel ou função
import PropTypes from "prop-types";
//permite buscar os getTechs de techActions
import { getTechs } from "../../actions/techActions";

/**Realiza a busca dos tecnicos */
const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  /**Permite a atualização e a montagem do componentes
   * Segue a mesma finalidade do componentDidMount, componentDidUpdate e componentWillUnmount
   */
  useEffect(() => {
    //busca técnico em techActions.js no BD
    getTechs();
    //se não tiver esse comentário da erro
    // eslint-disable-next-line
  }, []);

  return (
    /* Se não ocorrer o carregamento e houver técnico registrado, lista como opções o nome e sobrenome de um tecnico */
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

/**Define o tipo de cada variavel */
TechSelectOptions.propTypes = {
  /**define tech como objeto */
  tech: PropTypes.object.isRequired,
  /**define getTechs como função */
  getTechs: PropTypes.func.isRequired,
};

/** */
const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
