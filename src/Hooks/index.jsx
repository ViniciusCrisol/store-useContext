import React from 'react';

import CartProvider from './CartContext';
import ListProvider from './ListContext';

function AppProvider({ children }) {
  return (
    <ListProvider>
      <CartProvider>{children}</CartProvider>
    </ListProvider>
  );
}

export default AppProvider;
