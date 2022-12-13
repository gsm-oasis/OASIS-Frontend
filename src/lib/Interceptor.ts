import axios from "axios";
import { REACT_APP_BASE_URL } from "../utils/requestUrl";
import TokenService from "./TokenService";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
