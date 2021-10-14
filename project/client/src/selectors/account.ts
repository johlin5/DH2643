import { selector } from "recoil";
import { accountNameAtom } from "../atoms/account";

export const withUserName = selector({
  key: "withToken",
  get: ({ get }) => get(accountNameAtom)
});
