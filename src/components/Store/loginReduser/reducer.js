import { USER_LOGIN, USER_LOGOUT } from "./constants";
const initialState = {
  email: "admin",
  password: "admin",
  isLogin: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    default:
      return {
        ...state,
      };
  }
};
export default UserReducer;
