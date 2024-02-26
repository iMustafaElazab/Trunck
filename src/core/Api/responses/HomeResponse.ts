/* eslint-disable max-lines */
interface HomeResponse {
  banners: Banner[];
  main_categories: MainCategory[];
  top_products: TopProduct[];
  featured_products: FeaturedProduct[];
  special_offers: SpecialOffer[];
  discount_stores: DiscountStore[];
}

export interface Banner {
  id: number;
  title_ar: string;
  title: string;
  title_en: string;
  description_ar: string;
  description_en: any;
  description: string;
  action_url: any;
  is_active: boolean;
  is_second: boolean;
  flash_sale_id: any;
  banner_type: string;
  file: File;
  file_id: number;
  flashSale: any;
}

interface File {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

interface MainCategory {
  id: number;
  parent_id: any;
  is_parent: boolean;
  is_child: string;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  is_active: boolean;
  home_view: boolean;
  image: Image;
  productCount: number;
  parent: string;
  children: Children[];
  created_at: string;
}

interface Image {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

interface Children {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  image: string;
  is_active: boolean;
  home_view: boolean;
  created_at: string;
  children: Children2[];
}

interface Children2 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  image: string;
  is_active: boolean;
  home_view: boolean;
  created_at: string;
}

export interface TopProduct {
  id: number;
  is_discounted: boolean;
  name: string;
  category_id: number;
  unit_id: number;
  tenant_id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en?: string;
  description: string;
  cultivation_place: string;
  rate: number;
  rating_numbers: number;
  reviews_numbers: number;
  customers_rating_numbers: number;
  rate_count_array: any;
  reviews: Review[];
  min_order: number;
  in_stock: boolean;
  is_active: boolean;
  is_published: boolean;
  is_featured: boolean;
  is_favourite: boolean;
  harvest_date: string;
  weight: string;
  type: number;
  type_text: string;
  lowest_price: number;
  highest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  new_lowest_price: string;
  new_highest_price: string;
  max_qty?: number;
  min_qty: number;
  prices: Price[];
  change_price_request: any;
  created_at: string;
  updated_at: string;
  unit: Unit;
  tenant: Tenant;
  category: Category;
  image: Image3;
  discount: string;
  images: string;
  can_review: boolean;
  total_orders_count: string;
  total_orders_sum: string;
  shipped_by: string;
  flash_sales_discount: any;
}

interface Review {
  id: number;
  rate: number;
  comment: string;
  date: string;
  user: string;
}

interface Price {
  id: number;
  item_id: number;
  price: number;
  minQty: number;
  maxQty?: number;
  created_at: string;
  updated_at: string;
  new_price?: string;
  discount?: number;
  discount_type?: number;
  item: Item;
}

interface Item {
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
  description_en?: string;
  cultivation_place: string;
  weight: string;
  harvest_date: string;
  change_price_request: any;
  maxQty?: number;
  minQty: number;
  highest_price: number;
  lowest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  created_at: string;
  updated_at: string;
  avg_rate: number;
  name: string;
  description: string;
  defaultImage: string;
  is_discounted: boolean;
  flash_sales: FlashSale[];
  discounts: Discount[];
  image: Image2;
}

interface FlashSale {
  id: number;
  name_ar: string;
  name_en: string;
  start_at: string;
  end_at: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  name: string;
  link: string;
  is_active_text: string;
  pivot: Pivot;
}

interface Pivot {
  item_id: number;
  flash_sale_id: number;
  discount: number;
}

interface Discount {
  id: number;
  item_id: number;
  discount: number;
  discount_type: number;
  discount_start_date: string;
  discount_end_date: string;
  created_at: string;
  updated_at: string;
}

interface Image2 {
  id: number;
  name: string;
  ext: string;
  url: string;
  type: string;
  width: number;
  height: number;
  mime: string;
  duration: any;
  user_id: number;
  custom_name: any;
  notes: any;
  fileable_type: string;
  fileable_id: number;
  created_at: string;
  updated_at: string;
}

interface Unit {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Tenant {
  id: number;
  name: string;
  phone: any[];
  about_ar?: string;
  about_en?: string;
  about?: string;
  street?: string;
  building_number?: string;
  block_number?: number;
  trade_type: number;
  trade_type_text: string;
  store_status_text: StoreStatusText;
  payment_status_text: string;
  request_status_text: string;
  request_status: number;
  is_blocked: boolean;
  delivery_type: boolean;
  business_type_id: any;
  area_id: number;
  governorate_id: number;
  block_id: number;
  file_id: any;
  is_auctioneer?: number;
  auctioneer_active: boolean;
  bank: string;
  subscription_plan_id: any;
  business_type: string;
  user: string;

  subscription: string;
  area: string;
  government: string;
  block: string;
  owner: string;
  owner_license: string;
  file: string;
  rate: string;
  rating_numbers: string;
  reviews_numbers: string;
  customers_rating_numbers: string;
  reviews: string;
  lat: string;
  lng: string;
  total_consumer_orders_count: string;
  total_supply_orders_count: string;
  total_consumer_orders_sum: string;
  total_supply_orders_sum: string;
  total_auctions_scheduled: number;
  total_auctions_ongoing: number;
  total_auctions_ended: number;
  total_auctions: number;
  shipping_fees: number;
  commercial_license_expiration_date: string;
  commercialLicenseFile: string;
  contract_status_text: string;
  contract?: Contract;
  minimum_order_price?: number;
}

interface StoreStatusText {
  id: number;
  name: string;
}

interface Contract {
  id: number;
  tenant_id: number;
  subscription_transaction_id: number;
  subscription_id: string;
  start_date: string;
  expired_at: string;
  authorized_signatory_ar: string;
  authorized_signatory_en: string;
  store_name_ar: string;
  store_name_en: string;
  governorate_id: number;
  area_id: number;
  block_id: number;
  street_ar: string;
  street_en: string;
  floor_ar: string;
  floor_en: string;
  building_ar: string;
  building_en: string;
  tower_no_ar: string;
  tower_no_en: string;
  apartment_no_ar: string;
  apartment_no_en: string;
  owner_name_ar: string;
  owner_name_en: string;
  civil_id: string;
  subscription_fee_amount: string;
  brokerage_percentage_of_total_sales: string;
  brokerage_percentage_of_auction_sales: string;
  governorate: Governorate;
  area: Area;
  block: Block;
  street: string;
  floor: string;
  building: string;
  tower_no: string;
  apartment_no: string;
  owner_name: string;
  store_name: string;
  authorized_signatory: string;
  day: string;
  status: number;
}

interface Governorate {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  created_at: any;
  updated_at: string;
}

interface Area {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  blocks_num: number;
  governorate_id: number;
}

interface Block {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  governorate_id: number;
  area_id: number;
}

interface Category {
  id: number;
  parent_id?: number;
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
  children: Children3[];
  created_at: string;
}

interface Children3 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  image: string;
  is_active: boolean;
  home_view: boolean;
  created_at: string;
  children: any[];
}

interface Image3 {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

interface FeaturedProduct {
  id: number;
  is_discounted: boolean;
  name: string;
  category_id: number;
  unit_id: number;
  tenant_id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en?: string;
  description: string;
  cultivation_place: string;
  rate: number;
  rating_numbers: number;
  reviews_numbers: number;
  customers_rating_numbers: number;
  rate_count_array: any;
  reviews: Review2[];
  min_order: number;
  in_stock: boolean;
  is_active: boolean;
  is_published: boolean;
  is_featured: boolean;
  is_favourite: boolean;
  harvest_date: string;
  weight: string;
  type: number;
  type_text: string;
  lowest_price: number;
  highest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  new_lowest_price: string;
  new_highest_price: string;
  max_qty?: number;
  min_qty: number;
  prices: Price2[];
  change_price_request: any;
  created_at: string;
  updated_at: string;
  unit: Unit2;
  tenant: Tenant2;
  category: Category2;
  image: Image5;
  discount: string;
  images: string;
  can_review: boolean;
  total_orders_count: string;
  total_orders_sum: string;
  shipped_by: string;
  flash_sales_discount: any;
}

interface Review2 {
  id: number;
  rate: number;
  comment: string;
  date: string;
  user: string;
}

interface Price2 {
  id: number;
  item_id: number;
  price: number;
  minQty: number;
  maxQty?: number;
  created_at: string;
  updated_at: string;
  new_price?: string;
  discount?: number;
  discount_type?: number;
  item: Item2;
}

interface Item2 {
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
  description_en?: string;
  cultivation_place: string;
  weight: string;
  harvest_date: string;
  change_price_request: any;
  maxQty?: number;
  minQty: number;
  highest_price: number;
  lowest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  created_at: string;
  updated_at: string;
  avg_rate: number;
  name: string;
  description: string;
  defaultImage: string;
  is_discounted: boolean;
  flash_sales: FlashSale2[];
  discounts: Discount2[];
  image: Image4;
}

interface FlashSale2 {
  id: number;
  name_ar: string;
  name_en: string;
  start_at: string;
  end_at: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  name: string;
  link: string;
  is_active_text: string;
  pivot: Pivot2;
}

interface Pivot2 {
  item_id: number;
  flash_sale_id: number;
  discount: number;
}

interface Discount2 {
  id: number;
  item_id: number;
  discount: number;
  discount_type: number;
  discount_start_date: string;
  discount_end_date: string;
  created_at: string;
  updated_at: string;
}

interface Image4 {
  id: number;
  name: string;
  ext: string;
  url: string;
  type: string;
  width: number;
  height: number;
  mime: string;
  duration: any;
  user_id: number;
  custom_name: any;
  notes: any;
  fileable_type: string;
  fileable_id: number;
  created_at: string;
  updated_at: string;
}

interface Unit2 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Tenant2 {
  id: number;
  name: string;
  phone: any[];
  about_ar?: string;
  about_en?: string;
  about?: string;
  street?: string;
  building_number?: string;
  block_number?: number;
  trade_type: number;
  trade_type_text: string;
  store_status_text: StoreStatusText2;
  payment_status_text: string;
  request_status_text: string;
  request_status: number;
  is_blocked: boolean;
  delivery_type: boolean;
  business_type_id: any;
  area_id: number;
  governorate_id: number;
  block_id: number;
  file_id: any;
  is_auctioneer?: number;
  auctioneer_active: boolean;
  bank: string;
  subscription_plan_id: any;
  business_type: string;
  user: string;
  subscription: string;
  area: string;
  government: string;
  block: string;
  owner: string;
  owner_license: string;
  file: string;
  rate: string;
  rating_numbers: string;
  reviews_numbers: string;
  customers_rating_numbers: string;
  reviews: string;
  lat: string;
  lng: string;
  total_consumer_orders_count: string;
  total_supply_orders_count: string;
  total_consumer_orders_sum: string;
  total_supply_orders_sum: string;
  total_auctions_scheduled: number;
  total_auctions_ongoing: number;
  total_auctions_ended: number;
  total_auctions: number;
  shipping_fees: number;
  commercial_license_expiration_date: string;
  commercialLicenseFile: string;
  contract_status_text: string;
  contract?: Contract2;
  minimum_order_price?: number;
}

interface StoreStatusText2 {
  id: number;
  name: string;
}

interface Contract2 {
  id: number;
  tenant_id: number;
  subscription_transaction_id: number;
  subscription_id: string;
  start_date: string;
  expired_at: string;
  authorized_signatory_ar: string;
  authorized_signatory_en: string;
  store_name_ar: string;
  store_name_en: string;
  governorate_id: number;
  area_id: number;
  block_id: number;
  street_ar: string;
  street_en: string;
  floor_ar: string;
  floor_en: string;
  building_ar: string;
  building_en: string;
  tower_no_ar: string;
  tower_no_en: string;
  apartment_no_ar: string;
  apartment_no_en: string;
  owner_name_ar: string;
  owner_name_en: string;
  civil_id: string;
  subscription_fee_amount: string;
  brokerage_percentage_of_total_sales: string;
  brokerage_percentage_of_auction_sales: string;
  governorate: Governorate2;
  area: Area2;
  block: Block2;
  street: string;
  floor: string;
  building: string;
  tower_no: string;
  apartment_no: string;
  owner_name: string;
  store_name: string;
  authorized_signatory: string;
  day: string;
  status: number;
}

interface Governorate2 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  created_at: any;
  updated_at: string;
}

interface Area2 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  blocks_num: number;
  governorate_id: number;
}

interface Block2 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  governorate_id: number;
  area_id: number;
}

interface Category2 {
  id: number;
  parent_id?: number;
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
  children: Children4[];
  created_at: string;
}

interface Children4 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  image: string;
  is_active: boolean;
  home_view: boolean;
  created_at: string;
  children: any[];
}

interface Image5 {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

interface SpecialOffer {
  id: number;
  is_discounted: boolean;
  name: string;
  category_id: number;
  unit_id: number;
  tenant_id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en?: string;
  description: string;
  cultivation_place: string;
  rate: number;
  rating_numbers: number;
  reviews_numbers: number;
  customers_rating_numbers: number;
  rate_count_array: any;
  reviews: Review3[];
  min_order: number;
  in_stock: boolean;
  is_active: boolean;
  is_published: boolean;
  is_featured: boolean;
  is_favourite: boolean;
  harvest_date: string;
  weight: string;
  type: number;
  type_text: string;
  lowest_price: number;
  highest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  new_lowest_price: string;
  new_highest_price: string;
  max_qty?: number;
  min_qty: number;
  prices: Price3[];
  change_price_request: any;
  created_at: string;
  updated_at: string;
  unit: Unit3;
  tenant: Tenant3;
  category: Category3;
  image: Image7;
  discount: string;
  images: string;
  can_review: boolean;
  total_orders_count: string;
  total_orders_sum: string;
  shipped_by: string;
  flash_sales_discount: any;
}

interface Review3 {
  id: number;
  rate: number;
  comment: string;
  date: string;
  user: string;
}

interface Price3 {
  id: number;
  item_id: number;
  price: number;
  minQty: number;
  maxQty?: number;
  created_at: string;
  updated_at: string;
  new_price?: string;
  discount?: number;
  discount_type?: number;
  item: Item3;
}

interface Item3 {
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
  description_en?: string;
  cultivation_place: string;
  weight: string;
  harvest_date: string;
  change_price_request: any;
  maxQty?: number;
  minQty: number;
  highest_price: number;
  lowest_price: number;
  quantity: number;
  on_hold_qty: number;
  available_qty: number;
  created_at: string;
  updated_at: string;
  avg_rate: number;
  name: string;
  description: string;
  defaultImage: string;
  is_discounted: boolean;
  flash_sales: FlashSale3[];
  discounts: Discount3[];
  image: Image6;
}

interface FlashSale3 {
  id: number;
  name_ar: string;
  name_en: string;
  start_at: string;
  end_at: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  name: string;
  link: string;
  is_active_text: string;
  pivot: Pivot3;
}

interface Pivot3 {
  item_id: number;
  flash_sale_id: number;
  discount: number;
}

interface Discount3 {
  id: number;
  item_id: number;
  discount: number;
  discount_type: number;
  discount_start_date: string;
  discount_end_date: string;
  created_at: string;
  updated_at: string;
}

interface Image6 {
  id: number;
  name: string;
  ext: string;
  url: string;
  type: string;
  width: number;
  height: number;
  mime: string;
  duration: any;
  user_id: number;
  custom_name: any;
  notes: any;
  fileable_type: string;
  fileable_id: number;
  created_at: string;
  updated_at: string;
}

interface Unit3 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Tenant3 {
  id: number;
  name: string;
  phone: any[];
  about_ar?: string;
  about_en?: string;
  about?: string;
  street?: string;
  building_number?: string;
  block_number?: number;
  trade_type: number;
  trade_type_text: string;
  store_status_text: StoreStatusText3;
  payment_status_text: string;
  request_status_text: string;
  request_status: number;
  is_blocked: boolean;
  delivery_type: boolean;
  business_type_id: any;
  area_id: number;
  governorate_id: number;
  block_id: number;
  file_id: any;
  is_auctioneer?: number;
  auctioneer_active: boolean;
  bank: string;
  subscription_plan_id: any;
  business_type: string;
  user: string;
  subscription: string;
  area: string;
  government: string;
  block: string;
  owner: string;
  owner_license: string;
  file: string;
  rate: string;
  rating_numbers: string;
  reviews_numbers: string;
  customers_rating_numbers: string;
  reviews: string;
  lat: string;
  lng: string;
  total_consumer_orders_count: string;
  total_supply_orders_count: string;
  total_consumer_orders_sum: string;
  total_supply_orders_sum: string;
  total_auctions_scheduled: number;
  total_auctions_ongoing: number;
  total_auctions_ended: number;
  total_auctions: number;
  shipping_fees: number;
  commercial_license_expiration_date: string;
  commercialLicenseFile: string;
  contract_status_text: string;
  contract?: Contract3;
  minimum_order_price?: number;
}

interface StoreStatusText3 {
  id: number;
  name: string;
}

interface Contract3 {
  id: number;
  tenant_id: number;
  subscription_transaction_id: number;
  subscription_id: string;
  start_date: string;
  expired_at: string;
  authorized_signatory_ar: string;
  authorized_signatory_en: string;
  store_name_ar: string;
  store_name_en: string;
  governorate_id: number;
  area_id: number;
  block_id: number;
  street_ar: string;
  street_en: string;
  floor_ar: string;
  floor_en: string;
  building_ar: string;
  building_en: string;
  tower_no_ar: string;
  tower_no_en: string;
  apartment_no_ar: string;
  apartment_no_en: string;
  owner_name_ar: string;
  owner_name_en: string;
  civil_id: string;
  subscription_fee_amount: string;
  brokerage_percentage_of_total_sales: string;
  brokerage_percentage_of_auction_sales: string;
  governorate: Governorate3;
  area: Area3;
  block: Block3;
  street: string;
  floor: string;
  building: string;
  tower_no: string;
  apartment_no: string;
  owner_name: string;
  store_name: string;
  authorized_signatory: string;
  day: string;
  status: number;
}

interface Governorate3 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  created_at: any;
  updated_at: string;
}

interface Area3 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  blocks_num: number;
  governorate_id: number;
}

interface Block3 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  governorate_id: number;
  area_id: number;
}

interface Category3 {
  id: number;
  parent_id?: number;
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
  children: Children5[];
  created_at: string;
}

interface Children5 {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  sort: number;
  image: string;
  is_active: boolean;
  home_view: boolean;
  created_at: string;
  children: any[];
}

interface Image7 {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

interface DiscountStore {
  id: number;
  name: string;
  phone: string[];
  about: string;
  address?: string;
  lat: string;
  lng: string;
  trade_type: number;
  trade_type_text: string;
  store_status_text: StoreStatusText4;
  payment_status_text: string;
  request_status_text: string;
  delivery_type: string;
  request_status: number;
  is_blocked: boolean;
  contract_link: any;
  contract_status_text: string;
  contract_status: number;
  contract_id: any;
  business_type_id: number;
  area_id: any;
  block_id: number;
  block: string;
  governorate_id: any;
  file_id: number;
  is_auctioneer: number;
  auctioneer_active: boolean;
  bank: string;
  subscription_plan_id: any;
  business_type: BusinessType;
  user: string;
  subscription: string;
  area: string;
  government: string;
  owner: string;
  file: File2;
  images: Image8[];
  rate: number;
  rating_numbers: number;
  reviews_numbers: number;
  customers_rating_numbers: number;
  rate_count_array: any;
  reviews: any[];
  sample_of_products: any[];
  can_review: boolean;
  discount: number;
  minimum_order_price: number;
}

interface StoreStatusText4 {
  id: number;
  name: string;
}

interface BusinessType {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  description: any;
  created_at: string;
  updated_at: string;
}

interface File2 {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}

interface Image8 {
  id: number;
  name: string;
  type: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
  path: string;
  created_at: string;
}
export default HomeResponse;
