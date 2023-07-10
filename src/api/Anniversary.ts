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

  addAnniversary(anniversaryName: string, anniversaryDate: string) {
    try {
      return AxiosInstance(
        {
          method: "POST",
          url: getAnniversary.getaAnniversary(),
          data: {
            anniversaryName: anniversaryName,
            anniversaryDate: anniversaryDate,
          },
        },
        TokenService.getLocalAccessToken()
      );
    } catch (error) {
      return error;
    }
  }
}

export default new Anniversary();
