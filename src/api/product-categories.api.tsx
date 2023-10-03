import { Product } from "../models/product.model";
import http from "../utils/http/axios";

const httpInstance = http();

const get = async () => {
    const response = await httpInstance.get<Array<string>>('/products/categories');
    return response.data;
}

const getByCategory = async (category: string) => {
    const response = await httpInstance.get<Array<Product>>(`/products/category/${category}`);
    return response.data;
}

export default {
    get,
    getByCategory
}