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

  // settings
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
}

export default new User();
