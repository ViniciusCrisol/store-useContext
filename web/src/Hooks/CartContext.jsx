import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  const { cart, setCart } = context;

  const cartSize = cart.length;

  return { cart, setCart, cartSize };
}
