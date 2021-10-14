import { atom } from "recoil";
type Account = string;
type JwtToken = string | null;

export const accountNameAtom = atom<Account>({
  key: "accountName",
  default: ""
});

export const jwtTokenAtom = atom<JwtToken>({
  key: "jwtToken",
  default: null
});
