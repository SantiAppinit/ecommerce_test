import { Cart } from "../models/cart";
import http from "../utils/http/axios";

const httpInstance = http();

const add = async (cart: Cart) => {
    const response = await httpInstance.post<Cart>('/carts', cart);
    return response.data;
}

const get = async (id: number) => {
    const response = await httpInstance.get<Cart>(`/carts/${id}`);
    return response.data;
}

export default {
    add,
    get
}