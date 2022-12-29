import axios from "axios";
import { getAuth } from "../utils/getUrl";
import { REACT_APP_BASE_URL } from "../shared/config";
import TokenService from "./TokenService";
import { useRecoilState } from "recoil";
import { loggedAtom } from "../atoms/AtomContainer";

export const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
});

instance.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const error = err.response;
    if (error.status === 401 && !error.config.__isRetryRequest) {
      return getAuthToken().then((response: any) => {
        console.log("new Token:", response.data);
        TokenService.setUser(response.data);
        error.config.__isRetryRequest = true;
        return instance(error.config);
      });
    }

    return Promise.reject(err);
  }
);

let authTokenRequest: any;

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = makeActualAuthenticationRequest(); // 재발급요청
    authTokenRequest
      .catch(function () {
        // 요청에 실패하면 남아있는 토큰 지우고 로그인페이지로 가기
        const [, setLogged] = useRecoilState(loggedAtom);
        TokenService.removeUser();
        setLogged(false);
        window.location.replace("/login");
      })
      .then(resetAuthTokenRequest, resetAuthTokenRequest); // return하고 초기화
  }

  return authTokenRequest;
}

function makeActualAuthenticationRequest() {
  console.log(TokenService.getLocalRefreshToken());
  return axios({
    method: "PATCH",
    url: getAuth.tokenReissuance(), // 토큰 재발급 경로
    headers: {
      RefreshToken: TokenService.getLocalRefreshToken(), // 요청 형식
    },
  });
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}
