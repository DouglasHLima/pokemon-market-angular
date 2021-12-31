import { Product } from "../../products/models/product.model";

export interface ShoppingCartItem{
    product: Product,
    quantity: number
  }