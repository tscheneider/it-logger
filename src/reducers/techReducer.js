import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "../actions/types";

/** Inicializa as variaveis  */
const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        /**Cria uma cópia do estado */
        ...state,
        /**techs: recebe a ação com os técnicos */
        techs: action.payload,
        /**Torna falso o  carregamento */
        loading: false,
      };
    case ADD_TECH:
      return {
        /**Cria uma cópia do estado */
        ...state,
        techs: [...state.techs, action.payload],
        /**Torna falso o  carregamento */
        loading: false,
      };
    case SET_LOADING:
      return {
        /**Cria uma cópia do estado */
        ...state,
        /**Torna verdadeiro o  carregamento */
        loading: true,
      };
    case DELETE_TECH:
      return {
        /**Cria uma cópia do estado */
        ...state,
        /** */
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        /**Torna falso o  carregamento */
        loading: false,
      };
    case TECHS_ERROR:
      /**imprime no console o tipo de erro */
      console.error(action.payload);
      return {
        /**Cria uma cópia do estado */
        ...state,
        /**retorna o erro descrito em cada fução */
        error: action.payload,
        /**Torna falso o  carregamento */
        loading: false,
      };

    default:
      /**Cria uma cópia do estado */
      return state;
  }
};
