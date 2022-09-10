import { atom } from "jotai";

const userAtom = atom<{ token: string, userName: string }>({ token: '', userName: '' });

export default userAtom;
