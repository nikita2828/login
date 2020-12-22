import { USERSUCCESS, USERLOGOUT } from "./constants";
const initialState = {
  email: "admin",
  password: "admin",
  isLogin: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERSUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case USERLOGOUT:
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
export default Reducer;
