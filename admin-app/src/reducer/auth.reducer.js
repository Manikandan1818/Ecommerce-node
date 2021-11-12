import { authConstants } from "../action/constants";

const INITIALSTATE = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};

const authReducer = (state = INITIALSTATE, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });

    case authConstants.LOGIN_SUCESS:
      return (state = {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        authenticate: true,
        authenticating: false,
      });

    case authConstants.LOGOUT_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case authConstants.LOGOUT_SUCESS:
      return (state = {
        ...INITIALSTATE,
      });
    case authConstants.LOGOUT_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};

export default authReducer;
