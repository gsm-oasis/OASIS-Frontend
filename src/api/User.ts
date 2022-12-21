import AxiosInstance from "../lib/axios";
import { getUser } from "../utils/getUrl";

class User {
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
}

export default new User();
