import type {Product} from './HomeResponse';

export interface AddCartResponse {
  id: number;
  quantity: number;
  product: Product;
}

export interface CartResponse {
  cart_items: AddCartResponse[];
  sub_total: number;
  total: number;
}
