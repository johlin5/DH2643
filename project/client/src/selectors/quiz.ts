import { selector } from 'recoil';
import { canEditAtom } from '../atoms/quiz';

export const withEdit = selector({
  key: "withEdit", 
  get: ({get}) => (get(canEditAtom))
});