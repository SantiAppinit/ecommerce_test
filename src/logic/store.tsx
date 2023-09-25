import { create } from "zustand";
import { createAuthSlice } from "./slices/auth.slice";
import { createCartSlice } from "./slices/cart.slice";
import { createCommonSlice } from "./slices/common.slice";
import { createProductSlice } from "./slices/product.slice";
import { StoreType } from "./slices";

// TODO: set up devtools

export const useAppStore = create<StoreType>((...args) => ({
    ...createAuthSlice(...args),
    ...createCartSlice(...args),
    ...createCommonSlice(...args),
    ...createProductSlice(...args)
}))