import { REACT_APP_BASE_URL } from "../shared/config";

export const getAuth = {
  signup: () => {
    return REACT_APP_BASE_URL + "auth/signup";
  },
  login: () => {
    return REACT_APP_BASE_URL + "auth/login";
  },
  mailConfirm: () => {
    return REACT_APP_BASE_URL + "auth/code";
  },
  sendMail: () => {
    return REACT_APP_BASE_URL + "auth/email";
  },
  findId: () => {
    return REACT_APP_BASE_URL + "auth/id";
  },
  changePw: () => {
    return REACT_APP_BASE_URL + "auth/password";
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + "auth/refresh";
  },
};

export const getUser = {
  linkCouple: () => {
    return REACT_APP_BASE_URL + "user";
  },
  getInfo: () => {
    return REACT_APP_BASE_URL + "user";
  },
};

export const getMain = {
  submitDate: () => {
    return REACT_APP_BASE_URL + "couple";
  },
  postMain: () => {
    return REACT_APP_BASE_URL + "couple";
  },
};

export const getDiary = {
  diary: () => {
    return REACT_APP_BASE_URL + "diary";
  },

  getList: () => {
    return REACT_APP_BASE_URL + "diary/list";
  },
};

export const getQuestion = {
  comment: () => {
    return REACT_APP_BASE_URL + "question/";
  },

  getList: () => {
    return REACT_APP_BASE_URL + "question/list";
  },
};

export const getHeart = {
  getHeart: () => {
    return REACT_APP_BASE_URL + "heart";
  },
};
