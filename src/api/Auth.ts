import { getAuth, getMain, getUser } from "../utils/getUrl";
import { LoginInterface, SignUpInterface } from "../interfaces/AuthInterface";
import AxiosInstance from "../lib/axios";

class Auth {
  mailConfirm(checkNum: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.mailConfirm(),
        data: {
          code: checkNum,
        },
      });
    } catch (error) {
      return error;
    }
  }

  sendMail(email: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getAuth.sendMail(),
        data: {
          email: email,
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
          nickname: data.nickname,
        },
      });
    } catch (error) {
      return error;
    }
  }

  linkCouple(code: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getUser.linkCouple(),
        data: {
          code: code,
        },
      });
    } catch (error) {
      return error;
    }
  }

  submitDate(firstDay: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getMain.submitDate(),
        data: {
          firstDay: firstDay,
        },
      });
    } catch (error) {
      return error;
    }
  }

  postMain(token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getMain.postMain(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
