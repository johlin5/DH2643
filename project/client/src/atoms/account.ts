import { atom } from "recoil";
type AccountName = string;
type JwtToken = string | null;

export const accountNameAtom = atom<AccountName>({
  key: "accountName",
  default: ""
});

export const jwtTokenAtom = atom<JwtToken>({
  key: "jwtToken",
  default: null
});
