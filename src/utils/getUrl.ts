import { REACT_APP_BASE_URL } from "../shared/config";

export const getAuth = {
  signup: () => {
    return REACT_APP_BASE_URL + "auth/signup";
  },
  login: () => {
    return REACT_APP_BASE_URL + "auth/login";
  },
  mailConfirm: () => {
    return REACT_APP_BASE_URL + "auth/mailconfirm";
  },
  sendMail: () => {
    return REACT_APP_BASE_URL + "auth/sendmail";
  },
  linkCouple: () => {
    return REACT_APP_BASE_URL + "user/connect/couple";
  },
  submitDate: () => {
    return REACT_APP_BASE_URL + "mainpage/enter/datingdate";
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + "auth";
  },
};
