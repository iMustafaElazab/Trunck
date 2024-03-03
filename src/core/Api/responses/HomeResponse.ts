interface HomeResponse {
  banners: Banner[];
  products: Product[];
  ad: string;
}

export interface Banner {
  id: number;
  image: string;
  category: CategoryResponse;
  product: Product;
}

export interface Product {
  id: number;
  price: number;
  old_price: number;
  discount: number;
  image: string;
  name: string;
  description: string;
  images: string[];
  in_favorites: boolean;
  in_cart: boolean;
}

export interface CategoryResponse {
  id: number;
  name: string;
  image: string;
}
export default HomeResponse;
