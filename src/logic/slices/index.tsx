import { AuthSchema } from "../schemas/auth.schema";
import { CartSchema } from "../schemas/cart.schema";
import { CommonSchema } from "../schemas/common.schema";
import { ProductSchema } from "../schemas/product.schema";

export type StoreType = AuthSchema & CartSchema & CommonSchema & ProductSchema;