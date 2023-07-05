export interface LoginInterface {
  id: string;
  password: string;
}

export interface SignUpInterface {
  id: string;
  password: string;
  email: string;
  nickname: string;
}

export interface TokenInterface {
  accessToken: string;
  coupleCode: string;
  expiredAt: string;
  isCouple: boolean;
  refreshToken: string;
}
