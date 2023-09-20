import { Product } from "../models/product.model";
import http from "../utils/http/axios";

const httpInstance = http();

const getAll = async () => {
    const response = await httpInstance.get<Array<Product>>('/products');
    return response.data;
}

const getById = async (id: number) => {
    const response = await httpInstance.get<Product>(`/products/${id}`);
    return response.data;
}

const add = async (product: Product) => {
    const response = await httpInstance.post<Product>('/products', product);
    return response.data;
}

const update = async (id: number, product: Product) => {
    const response = await httpInstance.put<Product>(`/products/${id}`, product);
    return response.data;
}

const remove = async (id: number) => {
    const response = await httpInstance.delete<Product>(`/products/${id}`);
    return response.data;
}

export default {
    getAll,
    getById,
    add,
    remove
}