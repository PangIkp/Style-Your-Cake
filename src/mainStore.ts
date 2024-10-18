import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { OrderSummaryType, ReviewType } from "./interfaces";

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
  orderDetailList: OrderSummaryType[];
  reviewDetailList: ReviewType[];
  orderHistory: OrderSummaryType[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void; // เพิ่มฟังก์ชันสำหรับการลบรายการ
  updateItemQuantity: (productId: string, quantity: number) => void; // เพิ่มฟังก์ชันสำหรับการอัปเดตจำนวนสินค้า
  setItems: (items: CartItem[]) => void;
  setOrderDetail: (orderDetail: OrderSummaryType[]) => void;
  addOrderDetail: (orderDetail: OrderSummaryType) => void;
  setReviewDetail: (reviewDetail: any) => void;
  addReviewDetail: (reviewDetail: ReviewType) => void;
  updateReviewDetail: (reviewDetail: ReviewType) => void;
}


export const generateOrderID = () => {
  const prefix = "OR"; // คำเริ่มต้นสำหรับ Order ID
  const randomNumber = Math.floor(10000 + Math.random() * 90000); // สุ่มตัวเลข 5 หลัก
  return `${prefix}${randomNumber}`;
};

// Define the state interface
interface HiddenAccountState {
  isLoggedIn: boolean; // Login status
  username: string | null; // Store username
  setIsLoggedIn: (loggedIn: boolean) => void; // Method to set login state
  setUsername: (name: string | null) => void; // Method to set username
}

// Create the store with persistence
export const useHiddenAccount = create<HiddenAccountState>()(
  persist(
    (set) => ({
      isLoggedIn: false, // Initial login state
      username: null, // Initial username
      setIsLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
      setUsername: (name: string | null) => set({ username: name }),
    }),
    {
      name: 'style-your-cake-authentication', // Unique name in storage
      storage: createJSONStorage(() => sessionStorage), // Using sessionStorage
    }
  )
);

// Create the Zustand store with persist middleware
export const useMainStore = create<MainStore>()(
  persist(
    (set, get) => ({
      items: [],
      orderHistory: [],
      orderDetailList: [],
      // orderDetailList: {
      //   orderID: "",
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phone: "",
      //   address: {
      //     province: "",
      //     district: "",
      //     subdistrict: "",
      //     postalCode: "",
      //   },
      //   items: [],
      //   subtotal: 0,
      //   totalWithVAT: 0,
      // },
      // reviewDetail: {
      //   firstName: "",
      //   rating: 0,
      //   comment: "",
      //   date: "",
      // },
      reviewDetailList: [],
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
      addOrderDetail: (orderDetail: OrderSummaryType) =>
        set((state) => {
          // ถ้ายังไม่มีในตะกร้าให้เพิ่มรายการใหม่
          return { orderDetailList: [...state.orderDetailList, orderDetail] };
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
      updateReviewDetail: (reviewDetail: ReviewType) =>
        set((state) => ({
          reviewDetailList: state.reviewDetailList.map((item) =>
            item.orderId === reviewDetail.orderId
              ? {
                  ...item,
                  rating: reviewDetail.rating,
                  comment: reviewDetail.comment,
                  date: reviewDetail.date,
                } // จำกัดจำนวนสินค้าอยู่ที่ 1 ถึง 5
              : item
          ),
        })),
      setItems: (items: CartItem[]) => set({ items }),
      // setOrderDetail: (newOrderDetailList: OrderSummaryType[]) =>
      //   set({ newOrderDetailList }
      //     // orderDetailList: {
      //     //   ...state.orderDetailList, // เก็บข้อมูลคำสั่งซื้อเดิมไว้
      //     //   items: [...state.orderDetailList.items, ...newOrderDetail.items], // รวมรายการสินค้าเดิมกับรายการใหม่
      //     //   subtotal: state.orderDetail.subtotal + newOrderDetail.subtotal, // อัปเดตยอดรวม
      //     //   totalWithVAT: state.orderDetail.totalWithVAT + newOrderDetail.totalWithVAT, // อัปเดตยอดรวมพร้อม VAT
      //     // },

      //   ),
      setOrderDetail: (orderDetailList: OrderSummaryType[]) =>
        set({ orderDetailList }),
      setReviewDetail: (reviewDetailList: ReviewType[]) =>
        set({ reviewDetailList }), // เพิ่มฟังก์ชันนี้

      addReviewDetail: (reviewDetail: ReviewType) =>
        set((state) => {
          // ถ้ายังไม่มีในตะกร้าให้เพิ่มรายการใหม่
          return {
            reviewDetailList: [...state.reviewDetailList, reviewDetail],
          };
        }),
    }),
    {
      name: "style-your-cake", // Unique name in storage
      storage: createJSONStorage(() => sessionStorage), // Using sessionStorage
    }
  )
);
