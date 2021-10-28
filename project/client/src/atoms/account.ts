import { atom } from "recoil";
type Account = string | null;
type JwtToken = string | null;
type IsAuth = boolean;

export const accountNameAtom = atom<Account>({
  key: "accountName",
  default: null
});

export const jwtTokenAtom = atom<JwtToken>({
  key: "jwtToken",
  default: null
});

export const isAuthAtom = atom<IsAuth>({
  key: "isAuth",
  default: false
});
