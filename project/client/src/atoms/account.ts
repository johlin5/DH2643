import { atom } from "recoil";
type AccountName = string;

export const accountnNameAtom = atom<AccountName>({
  key: "accountName",
  default: ""
});
