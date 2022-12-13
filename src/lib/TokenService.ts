import { TokenInterface } from "../utils/AuthInterface";

class TokenService {
  getLocalAccessToken() {
    const user = JSON.parse(localStorage.getItem("token") || "{}");
    return user?.accessToken;
  }
}

export default new TokenService();
