import { create } from 'zustand';
import authProduce from '../produces/auth.produce';

const useAuthStore = create((set) => ({
  user: null,
  login: (username: string, pass: string) => set(authProduce.loginProduce(username, pass)),
}))

export default useAuthStore;