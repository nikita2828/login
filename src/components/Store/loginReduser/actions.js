import { USER_LOGIN, USER_LOGOUT } from "./constants";
export const userLogin = () => {
  return {
    type: USER_LOGIN,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
