import AxiosInstance from "../lib/axios";
import { getUser } from "../utils/getUrl";

class User {
  linkCouple(coupleCode: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getUser.linkCouple(),
        data: {
          code: coupleCode,
        },
      });
    } catch (error) {
      return error;
    }
  }

  setBirthday(birthday: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getUser.setBirthday(),
        params: {
          anniversaryDate: birthday,
        },
      });
    } catch (error) {
      return error;
    }
  }

  getInfo(token: string) {
    try {
      return AxiosInstance(
        {
          method: "GET",
          url: getUser.getInfo(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  userWithdrawal(token: string) {
    try {
      return AxiosInstance(
        {
          method: "DELETE",
          url: getUser.userWithdrawal(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  cutOffCouple(token: string) {
    try {
      return AxiosInstance(
        {
          method: "DELETE",
          url: getUser.cutOffCouple(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  changePassword(originalPassword: string, password: string, token: string) {
    try {
      return AxiosInstance(
        {
          method: "PATCH",
          url: getUser.changePassword(),
          data: {
            originalPassword: originalPassword,
            password: password,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }

  changeNickname(nickname: string, token: string) {
    try {
      return AxiosInstance(
        {
          method: "PATCH",
          url: getUser.changeNickname(),
          data: {
            nickname: nickname,
          },
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new User();
