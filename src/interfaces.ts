export interface ToppingItem {
    name: string;
    quantity: number;
}

export interface ProductItem {
    id: string;
    productName: string;
    price: number;
    category: string;
    productPic: string;
}

export interface CartItem {
  id: string;
  image: string;
  name: string;
  size: string;
  productId: string;
  quantity: number;
  price: number;
  details: string;
}

export interface CartItemType {
  id: string;
  productId: string;
  name: string;
  size : string;
  price: number;
  quantity: number;
  details: string;
  image: string;
}

export interface Tambon {
    id: number;
    zip_code: number;
    name_th: string;
    name_en: string;
    amphure_id: number;
  }
  
  export interface Amphure {
    id: number;
    name_th: string;
    name_en: string;
    province_id: number;
    tambon: Tambon[];
  }
  
  export interface Province {
    id: number;
    name_th: string;
    name_en: string;
    geography_id: number;
    amphure: Amphure[];
  }
export interface OrderSummaryType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
      province: Province | null;
      district: Amphure | null;
      subdistrict: Tambon | null;
      postalCode: string;
    };
    items: Array<{ name: string; price: number }>;
    subtotal: number;
    totalWithVAT: number;
  }