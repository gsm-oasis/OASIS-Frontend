import AxiosInstance from "../lib/axios";
import { getMain } from "../utils/getUrl";

class Main {
  submitDate(startDay: string) {
    try {
      return AxiosInstance({
        method: "POST",
        url: getMain.submitDate(),
        data: {
          startDay,
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

export default new Main();
