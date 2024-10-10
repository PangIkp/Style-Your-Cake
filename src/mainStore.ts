import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { OrderSummaryType } from "./interfaces";

// Define the CartItem interface
interface CartItem {
  id: string;
  image: string;
  name: string;
  size: string;
  productId: string;
  quantity: number;
  price: number;
  details: string;
}

// Define the Zustand store interface
interface MainStore {
  items: CartItem[];
  orderDetail: OrderSummaryType;
  reviewDetail: any;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void; // เพิ่มฟังก์ชันสำหรับการลบรายการ
  updateItemQuantity: (productId: string, quantity: number) => void; // เพิ่มฟังก์ชันสำหรับการอัปเดตจำนวนสินค้า
  setItems: (items: CartItem[]) => void;
  setOrderDetail: (orderDetail: OrderSummaryType) => void;
  setReviewDetail: (reviewDetail: any) => void;
}

// Create the Zustand store with persist middleware
export const useMainStore = create<MainStore>()(
  persist(
    (set, get) => ({
      items: [],
      orderDetail: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: {
          province: "",
          district: "",
          subdistrict: "",
          postalCode: "",
        },
        items: [],
        subtotal: 0,
        totalWithVAT: 0,
      },
      reviewDetail: {
        firstName: "",
        rating: 0,
        comment: "",
        date: "",
      },
      addItem: (item: CartItem) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            // ถ้ารายการมีอยู่แล้ว ให้ปรับปรุงจำนวน
            return {
              items: state.items.map(
                (i) =>
                  i.id === item.id
                    ? {
                        ...i,
                        quantity: Math.min(i.quantity + item.quantity, 5),
                      }
                    : i // ปรับปรุงจำนวนสินค้า
              ),
            };
          }
          // ถ้ายังไม่มีในตะกร้าให้เพิ่มรายการใหม่
          return { items: [...state.items, item] };
        }),
      removeItem: (id: string) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id), // กรองรายการที่ไม่ตรงกับ ID ที่จะลบ
        })),
      updateItemQuantity: (id: string, quantity: number) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, Math.min(quantity, 5)) } // จำกัดจำนวนสินค้าอยู่ที่ 1 ถึง 5
              : item
          ),
        })),
      setItems: (items: CartItem[]) => set({ items}),
      setOrderDetail: (orderDetail: OrderSummaryType) => set({ orderDetail }), // เพิ่มฟังก์ชันนี้
      setReviewDetail: (reviewDetail: any) => set({ reviewDetail }), // เพิ่มฟังก์ชันนี้
        
    }),
    {
      name: "style-your-cake", // Unique name in storage
      storage: createJSONStorage(() => sessionStorage), // Using sessionStorage
    }
  )
);
