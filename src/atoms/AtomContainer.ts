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
  // 사용자 이름
  key: "nickname",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const SignUpPageAtom = atom({
  key: "nextPage",
  default: false,
});

export const MyCoupleNameAtom = atom({
  // 내 커플의 이름
  key: "mycoupleName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isCoupleAtom = atom({
  key: "isCouple",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
