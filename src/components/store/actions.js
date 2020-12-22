import { USERSUCCESS, USERLOGOUT } from "./constants";
export const userSuccess = () => {
  return {
    type: USERSUCCESS,
  };
};

export const userLogOut = () => {
  return {
    type: USERLOGOUT,
  };
};
