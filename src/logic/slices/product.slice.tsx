import { StateCreator } from 'zustand';
import { ProductSchema } from '../schemas/product.schema';
import { FilterParams } from '../../models/filter.model';
import productsApi from '../../api/products.api';
import productCategoriesApi from '../../api/product-categories.api';

export const createProductSlice: StateCreator<ProductSchema> = ((set, get) => ({
  products: [],
  categories: [],
  getProducts: async (params?: FilterParams) => {
    const res = await productsApi.getAll(params);
    set({ products: res })
  },
  getCategories: async () => {
    const res = await productCategoriesApi.get();
    set({ categories: res })
  },
  getProductsByCategory: async (category: string) => {
    const res = await productCategoriesApi.getByCategory(category);
    set({ products: res })
  }
}))