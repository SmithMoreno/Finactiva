'use client';

import React, { createContext, useContext, useState } from 'react';

interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
}

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Course[]>([]);

  const addToCart = (course: Course) => {
    setCart((prev) => [...prev, course]);
  };

  const removeFromCart = (courseId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};