import { FilterParams } from "../../models/filter.model";
import { Product } from "../../models/product.model";

export interface ProductSchema {
    categories: string[],
    products: Product[];
    getProducts: (params?: FilterParams) => void;
    getCategories: () => void;
    getProductsByCategory: (category: string) => void;
}