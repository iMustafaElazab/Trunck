/* eslint-disable @typescript-eslint/naming-convention */
export interface HomeResponse {
  banners: Banner[];
  main_categories: MainCategory[];
  top_products: FeaturedProduct[];
  featured_products: FeaturedProduct[];
  special_offers: FeaturedProduct[];
  discount_stores: any[];
}

export interface Banner {
  id: number;
  title_ar: string;
  title: string;
  title_en: string;
  description_ar: string;
  description_en: null;
  description: string;
  action_url: null;
  is_active: boolean;
  is_second: boolean;
  flash_sale_id: null;
  banner_type: string;
  file: File;
  file_id: number;
  flashSale: null;
}

export interface File {
  id: number;
  name: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

export interface FeaturedProduct {
  id: number;
  is_discounted: boolean;
  name: string;
  category_id: number;
  unit_id: number;
  tenant_id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: null | string;
  description: string;
  rate: number;
  rating_numbers: number;
  reviews_numbers: number;
  customers_rating_numbers: number;
  rate_count_array: null;
  reviews: Review[];
  min_order: number;
  in_stock: boolean;
  is_active: boolean;
  is_published: boolean;
  is_featured: boolean;
  is_favourite: boolean;
  harvest_date: Date;
  weight: string;
  type: number;
  lowest_price: number;
  highest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  new_lowest_price: string;
  new_highest_price: string;
  max_qty: number | null;
  min_qty: number;
  prices: Price[];
  change_price_request: null;
  created_at: Date;
  updated_at: Date;
  category: Category;
  image: File;
  discount: string;
  images: string;
  can_review: boolean;
  total_orders_count: string;
  total_orders_sum: string;
  flash_sales_discount: null;
}



export interface Category {
  id: number;
  parent_id: number | null;
  is_parent: boolean;
  is_child: string;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  is_active: boolean;
  home_view: boolean;
  image: string;
  productCount: number;
  parent: string;
  children: Child[];
  created_at: Date;
}

export interface Child {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  image: string;
  is_active: boolean;
  home_view: boolean;
  created_at: Date;
  children?: Child[];
}

export interface Price {
  id: number;
  item_id: number;
  price: number;
  minQty: number;
  maxQty: number | null;
  created_at: Date;
  updated_at: Date;
  new_price: null;
  discount: null;
  discount_type: null;
  item: Item;
}

export interface Item {
  id: number;
  name_ar: string;
  name_en: string;
  category_id: number;
  tenant_id: number;
  unit_id: number;
  is_active: boolean;
  is_published: boolean;
  is_featured: boolean;
  in_stock: boolean;
  type: number;
  description_ar: string;
  description_en: null | string;
  weight: string;
  harvest_date: Date;
  change_price_request: null;
  maxQty: number | null;
  minQty: number;
  highest_price: number;
  lowest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  created_at: Date;
  updated_at: Date;
  avg_rate: number;
  name: string;
  description: string;
  defaultImage: string;
  is_discounted: boolean;
  flash_sales: FlashSale[];
  discounts: Discount[];
  image: Image;
}

export interface Discount {
  id: number;
  item_id: number;
  discount: number;
  discount_type: number;
  discount_start_date: Date;
  discount_end_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface FlashSale {
  id: number;
  start_at: Date;
  end_at: Date;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  link: string;
  pivot: Pivot;
}

export interface Pivot {
  item_id: number;
  flash_sale_id: number;
  discount: number;
}

export interface Image {
  id: number;
  name: string;
  url: string;
  width: number;
  height: number;
  duration: null;
  user_id: number;
  custom_name: null;
  notes: null;
  fileable_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface Review {
  id: number;
  rate: number;
  comment: string;
  date: string;
  user: string;
}

export interface MainCategory {
  id: number;
  parent_id: null;
  is_parent: boolean;
  is_child: string;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  is_active: boolean;
  home_view: boolean;
  image: File;
  productCount: number;
  parent: string;
  children: Child[];
  created_at: Date;
}
