import { StateCreator } from 'zustand';
import { CartSchema } from '../schemas/cart.schema';

export const createCartSlice: StateCreator<CartSchema>  = ((set, get) => ({
  user: null,
}))