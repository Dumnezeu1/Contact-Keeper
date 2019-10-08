import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  CLEAR_SUCCES
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
        succes: false
      };
    case REGISTER_SUCCES:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        loading: false,
        succes: true
      };
    case LOGIN_SUCCES:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        succes: false
      };
    case CLEAR_SUCCES:
      return {
        ...state,
        succes: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        succes: false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
