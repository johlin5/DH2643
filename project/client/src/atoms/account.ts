import { atom, selector } from "recoil";
type AccountName = string;
type Auth = boolean;
type JwtToken = string | null;

export const accountNameAtom = atom<AccountName>({
  key: "accountName",
  default: ""
});

export const jwtTokenAtom = atom<JwtToken>({
  key: "jwtToken",
  default: null
});

export const authAtom = atom<Auth>({
  key: "auth",
  default: false
});
