import React, { useEffect } from "react";
//vem do react reducer
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Sistema de Chamados</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">Não há chamados para serem carregados</p>
      ) : (
        logs.map(
          (log) => (
            <LogItem log={log} key={log.id} />
          ) /* <li>{log.message}</li> */
        ) //log.massagenem vem do back-end db.json
      )}
    </ul>
  );
};

Logs.prototype = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
