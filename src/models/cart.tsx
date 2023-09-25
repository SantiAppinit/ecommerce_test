
interface CartProduct {
    productId: number,
    quantity: number
}

export interface Cart {
    userId: number,
    date: string,
    products: CartProduct[]
}