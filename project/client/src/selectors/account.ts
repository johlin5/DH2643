import { selector } from "recoil";
import { accountNameAtom, isAuthAtom } from "../atoms/account";

export const withUserName = selector({
  key: "withToken",
  get: ({ get }) => get(accountNameAtom)
});

export const userIsAuth = selector({
  key: "userIsAuth",
  get: ({ get }) => get(isAuthAtom)
});
