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
        ...INITIALSTATE,
      });
    default:
      return state;
  }
};

export default authReducer;
