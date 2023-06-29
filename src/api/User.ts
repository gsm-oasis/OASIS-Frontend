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
}

export default new User();
