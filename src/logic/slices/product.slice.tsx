import { StateCreator } from 'zustand';
import { ProductSchema } from '../schemas/product.schema';
import { Product } from '../../models/product.model';

export const createProductSlice: StateCreator<ProductSchema>  = ((set, get) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
}))