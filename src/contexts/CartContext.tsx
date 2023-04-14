import { ReactNode, createContext, useState } from "react";
import MenuItem from "../entities/MenuItem";
import { useLocalStorage } from "../hooks/useLocalStorage";


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
  getRestaurantId: () => number | null;
  getDeliveryAddress: () => number | null;
  setDeliveryAddress: (id: number) => void;
}

export const CartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

  const [cart, setCart] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [address, setAddress] = useLocalStorage<number>('delivery-address', 0);

  const getDeliveryAddress = () => {
    return address !== 0 ? address : null;
  }

  const setDeliveryAddress = (id: number) => {
    setAddress(id);
  }

  const incrementItem = (menuItem: MenuItem) => {
    const restaurantId = getRestaurantId();
    if (restaurantId && restaurantId !== menuItem.restaurantId) {
      clear();
    }
    setCart(oldCart => {
      if (oldCart.find(item => item.spec.id === menuItem.id)) {
        return oldCart.map(item => item.spec.id === menuItem.id ? { spec: item.spec, qty: item.qty + 1 } : item);
      } else {
        return [...oldCart, { spec: menuItem, qty: 1 }]
      }
    });
  }

  const decrementItem = (id: number) => {
    const foundItem = cart.find(item => item.spec.id === id);
    if (foundItem && foundItem.qty === 1) {
      removeItem(foundItem.spec.id);
    } else {
      setCart(oldCart => oldCart.map(item => item.spec.id === id ? { spec: item.spec, qty: item.qty - 1 } : item))
    }
    cart.length === 0 && setDeliveryAddress(0);
  }

  const getItemQty = (id: number) => {
    return cart.find(item => item.spec.id === id)?.qty || 0;
  }

  const removeItem = (id: number) => {
    setCart(oldCart => oldCart.filter(item => item.spec.id !== id));
  }

  const clear = () => {
    setCart([]);
    setDeliveryAddress(0);
  }

  const getRestaurantId = () => {
    return cart.length > 0 ? cart[0].spec.restaurantId : null;
  }

  return (
    <CartContext.Provider value={{
      cart,
      incrementItem,
      decrementItem,
      getItemQty,
      removeItem,
      clear,
      getRestaurantId,
      getDeliveryAddress,
      setDeliveryAddress
    }}>
      {children}
    </CartContext.Provider>
  );
}