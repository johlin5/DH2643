import { atom } from "recoil";
type editAtom = boolean;

export const canEditAtom = atom<editAtom>({
  key: "canEditAtom",
  default: false
});
