//React - padrão do react, Fragment - Faz o agrupamento das tags (semelhante ao div), useEffect - permite executar efeitos colaterais em componentes funcionais
import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
/*Adiciona a função de botões na aplicação */
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
  //O useEffect - Monta ou atualiza um componente
  //Neste cado ele inicializa o materialize, que gera modelos já prontos como o navbar
  useEffect(() => {
    //Inicializa o Materialize JS
    M.AutoInit();
  });
  return (
    //responsavel por realizar o redux
    <Provider store={store}>
      {/* Funciona como uma div */}
      <Fragment>
        {/* Executa a funçao SearchBar do arquivo SearchBar */}
        <SearchBar />
        {/* cria um container de informações com todas as tags abaixo */}
        <div className="container">
          {/**Adiciona os icones dos botões na tela */}
          <AddBtn />
          {/* Responsavel por adicionar um novo chamado e designa a tarefa para um tecnico */}
          <AddLogModal />
          {/** Edita um chamado já existente */}
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
