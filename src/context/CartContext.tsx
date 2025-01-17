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
  increaseCounterFromCartOrder: (order: Order) => void;
  decreaseCounterFromCartOrder: (order: Order) => void;
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
  function removeItemsToCart(order: Order) {
    setDeliveryInfo((state) => {
      const newCartOrders = state.cart.orders.filter(
        (cartOrder) => cartOrder.id !== order.id
      );
      const newDeliveryInfo: DeliveryInfo = {
        ...state,
        cart: {
          ...state.cart,
          orders: newCartOrders,
        },
      };
      return newDeliveryInfo;
    });
  }

  function increaseCounterFromCartOrder(order: Order) {
    setDeliveryInfo((state) => {
      const newCartOrders = state.cart.orders.map((cartOrder) => {
        if (cartOrder.id === order.id)
          return {
            ...cartOrder,
            quantity: cartOrder.quantity + 1,
          };
        return cartOrder;
      });
      const newDeliveryInfo: DeliveryInfo = {
        ...state,
        cart: {
          ...state.cart,
          orders: newCartOrders,
        },
      };
      return newDeliveryInfo;
    });
  }
  function decreaseCounterFromCartOrder(order: Order) {
    if (order.quantity === 0) return;
    setDeliveryInfo((state) => {
      const newCartOrders = state.cart.orders.map((cartOrder) => {
        if (cartOrder.id === order.id)
          return {
            ...cartOrder,
            quantity: cartOrder.quantity - 1,
          };
        return cartOrder;
      });
      const newDeliveryInfo: DeliveryInfo = {
        ...state,
        cart: {
          ...state.cart,
          orders: newCartOrders,
        },
      };
      return newDeliveryInfo;
    });
  }

  return (
    <CartContext.Provider
      value={{
        deliveryInfo,
        addItemsToCart,
        removeItemsToCart,
        increaseCounterFromCartOrder,
        decreaseCounterFromCartOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
