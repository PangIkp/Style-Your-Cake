// CartContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CartItem {
  id: number;
  image: string;
  name: string;
  size: string;
  productId: string;
  quantity: number;
  price: number;
  details: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const updateItemQuantity = (id: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeItem, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
