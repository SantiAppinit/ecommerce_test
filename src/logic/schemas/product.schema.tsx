import { Product } from "../../models/product.model";

export interface ProductSchema {
    products: Product[];
    setProducts: (products: Product[]) => void;
}