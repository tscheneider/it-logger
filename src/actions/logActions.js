import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

/* Esse arquivo é o responsável por criar as APIs que interagem com o BD */
/* export const getLogs = () => {
    return async (dispatch) =>{
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    }
} */

//obte logs do servidor
export const getLogs = () => async (dispatch) => {
  try {
    //chama a função que torna o sistema de carregamento verdadeiro
    setLoading();
    //API
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
    //caso não seja possivel realizar a operação acima do try ele enviara para o logReducer.js o tipo erro
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Adiciona novo chamado
export const addLog = (log) => async (dispatch) => {
  try {
    //chama a função que torna o sistema de carregamento verdadeiro
    setLoading();

    //traz como resposta os logs
    const res = await fetch("/logs", {
      //define o metodo como Post(adicionar no bd)
      method: "POST",
      //padrão
      body: JSON.stringify(log),
      //padrão
      headers: {
        "Content-Type": "application/json",
      },
    });
    //data recebe os logs adicionados.
    const data = await res.json();
    //manda o tipo de operação e o dado para o logReducer.js
    dispatch({
      /**
       *que retorna uma cópia estado atual 
        (...state), cópia dos logs e as ações dos dados
      ([...state.logs, action.payload]) etransforma o status do carregamento em false */

      type: ADD_LOG,
      payload: data,
    });
    //caso não seja possivel realizar a operação acima do try ele enviara para o logReducer.js o tipo erro
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//delete o serviço do chamado
export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//ATUALIZA o serviço do chamado
export const updateLog = (log) => async (dispatch) => {
  try {
    //chama a função que torna o sistema de carregamento verdadeiro
    setLoading();

    //API - traz como resposta os logs com o seu id
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //data recebe os valores trazidos por res
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    //caso não seja possivel realizar a operação acima do try ele enviara para o logReducer.js o tipo erro
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//buscar pelo filtro do navbar
//pega o text digitado em SearchBar
export const searchLogs = (text) => async (dispatch) => {
  try {
    //chama a função que torna o sistema de carregamento verdadeiro
    setLoading();

    //traz como resposta a busca dos logs que possuem o texto digitado no navbar
    const res = await fetch(`/logs?=${text}`);
    //data vai receber os dados que obtivemos como resposta na operação a cima
    const data = await res.json();

    //manda o tipo de operação e o dado para o logReducer.js
    dispatch({
      // que retorna uma cópia de todos os estados (...state) e a ação do carregamento dos logs  (logs: action.payload), onde logs é o conjunto de dados enviados no payload
      type: SEARCH_LOGS,
      payload: data,
    });
    //caso não seja possivel realizar a operação acima do try ele enviara para o logReducer.js o tipo erro
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//colocar o chamado na variavel current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//limpar campos do chamado na variavel current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//coloca carregamento como verdadeiro antes que os itens sejam buscado
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
