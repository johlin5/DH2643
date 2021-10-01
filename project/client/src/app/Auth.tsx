import { useSetRecoilState } from "recoil";
import { jwtTokenAtom } from "../atoms/account";

export const useSetJwtToken = (jwtToken: string): void => {
  const setToken = useSetRecoilState(jwtTokenAtom);
  localStorage.setItem("jwtToken", jwtToken);
  setToken(jwtToken);
  console.log("token set");
};

export const useDeleteJwtToken = (): void => {
  const setToken = useSetRecoilState(jwtTokenAtom);
  localStorage.setItem("jwtToken", "");
  setToken(null);
  console.log("token deleted");
};
