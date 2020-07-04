import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModel";
//import EditTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
//Para chamar o store que é o restonsável pelo redux
import { Provider } from "react-redux";
//onde temos as configurações do redux
import store from "./store";
//importação responsável pelo css da aplicação
//(foi) instalado com npm i materializa-css
import "materialize-css/dist/css/materialize.min.css";
//importa o javacrip to materialize
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import AddTechModal from "./components/techs/AddTechModal";

const App = () => {
  //Inicializa o materialize, que gera modelos já prontos como o  navbar
  useEffect(() => {
    //Inicializa o Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
