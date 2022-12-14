export interface LoginInterface {
  id: string;
  password: string;
}

export interface SignUpInterface {
  id: string;
  password: string;
  email: string;
  nickName: string;
}

export interface TokenInterface {
  accessToken: string;
  refreshToken: string;
  expiredAt: string;
}
