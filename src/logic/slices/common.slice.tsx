import { StateCreator } from 'zustand';
import { CommonSchema } from '../schemas/common.schema';

export const createCommonSlice: StateCreator<CommonSchema> = ((set, get) => ({
  loading: false,
  setLoading: (value: boolean) => set((state) => ({ ...state, loading: value }))
}))