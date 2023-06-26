import AxiosInstance from "../lib/axios";
import { getHeart } from "../utils/getUrl";

class Heart {
  getHeartLevel() {
    try {
      return AxiosInstance({
        method: "GET",
        url: getHeart.getHeart(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Heart();
