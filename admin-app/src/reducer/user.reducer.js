import { userConstants } from "../action/constants";

const INITIALSTATE = {
  error: null,
  message: "",
  loading: false,
};

const userReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case userConstants.USER_REGISTER_SUCESS:
      return (state = {
        ...state,
        loading: false,
        message: action.payload.message,
      });
    case userConstants.USER_REGISTER_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });

    default:
      return state;
  }
};

export default userReducer;
