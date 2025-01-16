import { createContext, ReactNode, useState } from 'react';
import { CoffeeProduct } from '../pages/Home/components/CoffeList';

export interface Order {
  id: number;
  product: CoffeeProduct;
  quantity: number;
}

export interface Cart {
  orders: Order[];
}

export interface DeliveryInfo {
  cart: Cart;
  userDelivery: any;
}

export interface CartContextType {
  deliveryInfo: DeliveryInfo;

  addItemsToCart: (order: Order) => void;
  removeItemsToCart: (order: Order) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProps) {
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    userDelivery: null,
    cart: { orders: [] },
  });

  function addItemsToCart(order: Order) {
    if (order.quantity == 0) return;
    setDeliveryInfo((state) => {
      const newCart: Cart = {
        orders: [...state.cart.orders, order],
      };
      const newDeliberyInfo: DeliveryInfo = {
        ...state,
        cart: newCart,
      };
      console.log(newDeliberyInfo);
      alert('item adicionado ao carrinho');
      return newDeliberyInfo;
    });
  }
  function removeItemsToCart() {}

  return (
    <CartContext.Provider
      value={{ deliveryInfo, addItemsToCart, removeItemsToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
