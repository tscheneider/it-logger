//import { FloatingActionButton } from "materialize-css";
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
} from "../actions/types";

/* Inicializa as váriaveis  */
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        logs: action.payload,
        loading: false,
      };
    /** Adiciona novos chamados*/
    case ADD_LOG:
      //retorna para logActions em addLogs
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /** cópia dos logs e as ações dos dados*/
        logs: [...state.logs, action.payload],
        /** transforma o status do carregamento em false */
        loading: false,
      };
    case DELETE_LOG:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /* passa pelos logs verificado se o log registrado no backend é diferente do buscado para deleção, quando for igual será salvo em logs */
        logs: state.logs.filter((log) => log.id !== action.payload),
        /**Desativa a barra de carregamento */
        loading: false,
      };
    case UPDATE_LOG:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /* Passa por todos os estados dos logs  e  se id do backend for igual ao id do item que será editado envia como resposta o dado recebido se não devolve apenas o log e vai para o próximo item */
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    case SET_CURRENT:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /* current recebe o dado  */
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /* currendo recebe null */
        current: null,
      };
    case SET_LOADING:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /**Torna carregamento verdadeira para que seja possivel apresentar a barra de carregammento */
        loading: true,
      };
    /* Na busca de um chamado pela barra de busca dp navbar */
    case SEARCH_LOGS:
      return {
        /* atualiza uma cópia estado atual */
        ...state,
        /* logs recebe a ação dos dados recebidos */
        logs: action.payload,
      };
    /** Apeesenta o erro que ocorreu durante a interação com o app */
    case LOGS_ERROR:
      /*Imprime o erro que ocorreu durante a ação de carregamento */
      console.error(action.payload);
      return {
        /**retora uma cópia do estado atual */
        ...state,
        /* retorna o erro que recebe a ação de err.response.statusText */
        error: action.payload,
      };
    //Se nenhum dos casos a cima ocorrer
    default:
      /**retora uma cópia do estado atual */
      return state;
  }
};
