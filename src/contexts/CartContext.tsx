import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext({});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [cart, setCart] = useState({});

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}