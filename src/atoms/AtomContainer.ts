import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const loggedAtom = atom({
  key: "logged",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const userIdAtom = atom({
  key: "userId",
  default: "",
});

export const passwordAtom = atom({
  key: "password",
  default: "",
});

export const emailAtom = atom({
  key: "email",
  default: "",
});

export const nickNameAtom = atom({
  key: "nickname",
  default: "",
});

export const SignUpPageAtom = atom({
  key: "nextPage",
  default: false,
});
