import { atom } from "recoil";
type Account = { name: string; id: string };
type JwtToken = string | null;

export const accountAtom = atom<Account>({
  key: "accountName",
  default: { name: "", id: "" }
});

export const jwtTokenAtom = atom<JwtToken>({
  key: "jwtToken",
  default: null
});
