import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

//obter técnico no servidor
export const getTechs = () => async (dispatch) => {
  try {
    //chama a função de carregamento que esta como verdadeiro
    setLoading();
    //recebe como resposta do servidor no techs
    const res = await fetch("/techs");
    //data recebe recebe os tecnicos buscados
    const data = await res.json();
    //retorna do techReducer.js uma cópia do estado (...state), a ação com os técnicos em (tech) e torna loading: false
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
    //caso haja algum problema no try entrará no catch
  } catch (err) {
    /**retorna o erro descrito em cada função e uma cópia do estado atual(...state) */
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    //chama a função de carregamento que esta como verdadeiro
    setLoading();

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
    //caso haja algum problema no try entrará no catch
  } catch (err) {
    /**retorna o erro descrito em cada função e uma cópia do estado atual(...state) */
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Adicionar técnico no servidor
export const addTech = (tech) => async (dispatch) => {
  try {
    //chama a função de carregamento que esta como verdadeiro
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
    //caso haja algum problema no try entrará no catch
  } catch (err) {
    /**retorna o erro descrito em cada função e uma cópia do estado atual(...state) */
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//retorna o carregamento como verdadeiro
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
