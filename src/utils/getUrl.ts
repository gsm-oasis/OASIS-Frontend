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
    return REACT_APP_BASE_URL + "auth/search/id";
  },
  changePw: () => {
    return REACT_APP_BASE_URL + "auth/reset/password";
  },

  tokenReissuance: () => {
    return REACT_APP_BASE_URL + "auth/refresh";
  },
};

export const getUser = {
  linkCouple: () => {
    return REACT_APP_BASE_URL + "user/connect/couple";
  },
};

export const getMain = {
  submitDate: () => {
    return REACT_APP_BASE_URL + "mainpage/enter/datingdate";
  },
  postMain: () => {
    return REACT_APP_BASE_URL + "mainpage/";
  },
};

export const getDiary = {
  getDetail: () => {
    return REACT_APP_BASE_URL + "diary/detail";
  },

  createDiary: () => {
    return REACT_APP_BASE_URL + "diary/create";
  },

  getList: () => {
    return REACT_APP_BASE_URL + "diary/list";
  },
};

export const getImage = {
  postImage: () => {
    return REACT_APP_BASE_URL + "image/";
  },
};

export const getQuestion = {
  getComment: () => {
    return REACT_APP_BASE_URL + "question/";
  },

  postComment: () => {
    return REACT_APP_BASE_URL + "question/answer/";
  },

  getList: () => {
    return REACT_APP_BASE_URL + "question/list";
  },
};
