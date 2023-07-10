import AxiosInstance from "../lib/axios";
import TokenService from "../lib/TokenService";
import { getAnniversary } from "../utils/getUrl";

class Anniversary {
  getAnniversaryList() {
    try {
      return AxiosInstance({
        method: "GET",
        url: getAnniversary.getaAnniversary(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Anniversary();
