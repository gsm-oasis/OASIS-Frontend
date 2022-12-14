import { atom } from "recoil";
// const { persistAtom } = recoilPersist();
// import { recoilPersist } from "recoil-persist";

export const loggedAtom = atom({
  key: "logged",
  default: false,
  // effects_UNSTABLE: [persistAtom],
});
