import { REACT_APP_BASE_URL } from "./requestUrl";

export const getAuth = {
  signup: () => {
    return REACT_APP_BASE_URL + "/auth/signup";
  },
  login: () => {
    console.log(REACT_APP_BASE_URL + "/auth/login");
    return REACT_APP_BASE_URL + "/auth/login";
  },
  mailConfirm: () => {
    return REACT_APP_BASE_URL + "auth/mailconfirm";
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + "/auth";
  },
};
