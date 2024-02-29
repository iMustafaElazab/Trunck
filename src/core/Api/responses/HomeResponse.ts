interface HomeResponse {
  banners: Banner[];
  products: Product[];
  ad: string;
}

export interface Banner {
  id: number;
  image: string;
  category: any;
  product: any;
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
export default HomeResponse;
