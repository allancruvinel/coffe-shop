import { createContext, ReactNode, useState } from 'react';
import { Cart, Order } from '../pages/Home/components/CoffeList';

export interface CartContextType {
  addItemsToCart: (order: Order) => void;
  removeItemsToCart: (order: Order) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<Cart>({ orders: [] });

  function addItemsToCart(order: Order) {
    cart.orders.push(order);
    console.log(cart);
  }
  function removeItemsToCart(order: Order) {}

  return (
    <CartContext.Provider value={{ addItemsToCart, removeItemsToCart }}>
      {children}
    </CartContext.Provider>
  );
}
