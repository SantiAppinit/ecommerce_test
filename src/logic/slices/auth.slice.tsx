import { StateCreator } from 'zustand';
import { AuthSchema } from '../schemas/auth.schema';

export const createAuthSlice: StateCreator<AuthSchema> = ((set, get) => ({
  user: null,
  setUser: (user: any) => set({ user }),
}))