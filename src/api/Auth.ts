import { getAuth } from "../utils/getUrl";
import AxiosInstance from "../lib/instance";
import { LoginInterface, SignUpInterface } from "../utils/AuthInterface";

class Auth {
  mailConfirm(data: { code: string }) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.mailConfirm(),
        data: {
          code: data.code,
        },
      });
    } catch (error) {
      return error;
    }
  }

  login(data: LoginInterface) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.login(),
        data: {
          id: data.id,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signup(data: SignUpInterface) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.signup(),
        data: {
          id: data.id,
          password: data.password,
          email: data.email,
          nickname: data.nickName,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
