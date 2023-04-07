import { ReactNode, createContext, useState } from "react";


type CartProviderProps = {
  children: ReactNode;
}

type CartItem = {
  id: number;
  qty: number;
}

type ShoppingCartContext = {
  cart: CartItem[];
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  getItemQty: (id: number) => number;
}

export const CartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [cart, setCart] = useState<CartItem[]>([]);

  const incrementItem = (id: number) => {
    setCart(oldCart => {
      if (oldCart.find(item => item.id === id)) {
        return oldCart.map(item => item.id === id ? { id: item.id, qty: item.qty + 1 } : item );
      } else {
        return [...oldCart, { id, qty: 1 }]
      }  
    });
  }

  const decrementItem = (id: number) => {
    setCart(oldCart => {
      if (oldCart.find(item => item.id === id)?.qty === 1) {
        return oldCart.filter(item => item.id !== id);
      } else {
        return oldCart.map(item => item.id === id ? { id: item.id, qty: item.qty - 1 } : item);
      }  
    });
  }

  const getItemQty = (id: number) => {
    return cart.find(item => item.id === id)?.qty || 0;
  }


  return (
    <CartContext.Provider value={{ cart, incrementItem, decrementItem, getItemQty }}>
      {children}
    </CartContext.Provider>
  );
}