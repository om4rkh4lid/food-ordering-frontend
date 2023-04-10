import { ReactNode, createContext, useState } from "react";
import MenuItem from "../entities/MenuItem";


type CartProviderProps = {
  children: ReactNode;
}

export type CartItem = {
  spec: MenuItem;
  qty: number;
}

type ShoppingCartContext = {
  cart: CartItem[];
  incrementItem: (menuItem: MenuItem) => void;
  decrementItem: (id: number) => void;
  getItemQty: (id: number) => number;
  removeItem: (id: number) => void;
  clear: () => void;
}

export const CartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [cart, setCart] = useState<CartItem[]>([]);

  const incrementItem = (menuItem: MenuItem) => {
    setCart(oldCart => {
      if (oldCart.find(item => item.spec.id === menuItem.id)) {
        return oldCart.map(item => item.spec.id === menuItem.id ? { spec: item.spec, qty: item.qty + 1 } : item );
      } else {
        return [...oldCart, { spec: menuItem, qty: 1 }]
      }  
    });
  }

  const decrementItem = (id: number) => {
    setCart(oldCart => {
      const foundItem = oldCart.find(item => item.spec.id === id);
      if (foundItem?.qty === 1) {
        return oldCart.filter(item => item.spec.id !== id);
      } else {
        return oldCart.map(item => item.spec.id === id ? { spec: foundItem!.spec, qty: item.qty - 1 } : item);
      }  
    });
  }

  const getItemQty = (id: number) => {
    return cart.find(item => item.spec.id === id)?.qty || 0;
  }

  const removeItem = (id: number) => {
    setCart(oldCart => oldCart.filter(item => item.spec.id !== id));
  }

  const clear = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, incrementItem, decrementItem, getItemQty, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}