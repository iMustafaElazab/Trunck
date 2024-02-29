import type {Product} from './HomeResponse';

export interface AddCartResponse {
  id: number;
  quantity: number;
  product: Product;
}
