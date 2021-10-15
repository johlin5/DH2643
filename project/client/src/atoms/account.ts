import { atom } from "recoil";
type Account = string | null;
type JwtToken = string | null;

export const accountNameAtom = atom<Account>({
  key: "accountName",
  default: null
});

export const jwtTokenAtom = atom<JwtToken>({
  key: "jwtToken",
  default: null
});
