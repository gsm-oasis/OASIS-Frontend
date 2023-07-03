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

  userWithdrawalModal(token: string) {
    try {
      return AxiosInstance(
        {
          method: "DELETE",
          url: getUser.userWithdrawalModal(),
        },
        token
      );
    } catch (error) {
      return error;
    }
  }
}

export default new User();
