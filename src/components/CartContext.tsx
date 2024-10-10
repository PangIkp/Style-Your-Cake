// import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

// interface CartItem {
//   id: string;
//   image: string;
//   name: string;
//   size: string;
//   productId: string;
//   quantity: number;
//   price: number;
//   details: string;
// }

// export interface CartItemType {
//   id: string;
//   productId: string;
//   name: string;
//   size : string;
//   price: number;
//   quantity: number;
//   details: string;
//   image: string;
// }

// interface CartContextType {
//   items: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeItem: (id: string) => void;
//   updateItemQuantity: (id: string, quantity : number) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);
// const CART_STORAGE_KEY = 'cartItems';

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [items, setItems] = useState<CartItem[]>([]);

//   // Load cart items from localStorage when the component mounts
//   useEffect(() => {
//     const storedItems = sessionStorage.getItem(CART_STORAGE_KEY);
//     if (storedItems) {
//       setItems(JSON.parse(storedItems));
//     }
//   }, []);

//   // Save cart items to localStorage whenever items change
//   useEffect(() => {
//     sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
//   }, [items]);

//   const addToCart = (item: CartItem) => {
//     setItems((prevItems) => {
//       const existingItem = prevItems.find(i => i.id === item.id);
//       if (existingItem) {
//         // Update quantity if item already exists, with a max limit of 5
//         const newQuantity = Math.min(existingItem.quantity + item.quantity, 5);
//         return prevItems.map(i =>
//           i.id === item.id ? { ...i, quantity: newQuantity } : i
//         );
//       }
//       // Add new item if it doesn't exist, initializing quantity to 1
//       return [...prevItems, { ...item, quantity: item.quantity }];
//     });
//   };

//   const removeItem = (id: string) => {
//     setItems((prevItems) => prevItems.filter(item => item.id !== id));
//   };

//   const updateItemQuantity = (productId: string, quantity: number) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.productId === productId
//           ? { ...item, quantity: Math.max(1, Math.min(quantity, 5)) } // Enforces quantity between 1 and 10
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ items, addToCart, removeItem, updateItemQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (context === undefined) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
