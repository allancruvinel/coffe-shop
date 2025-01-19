import { createContext, ReactNode, useEffect, useState } from 'react';
import { CoffeeProduct } from '../pages/Home/components/CoffeList';

export interface Order {
  id: number;
  product: CoffeeProduct;
  quantity: number;
}

export interface Cart {
  orders: Order[];
}

export enum PaymentType {
  MONEY = 'MONEY',
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
}

export interface User {
  bairro: string;
  cidade: string;
  rua: string;
  cep: number;
  numero: number;
  uf: string;
  complemento?: string | undefined;
}

export interface DeliveryInfo {
  cart: Cart;
  userDelivery?: User | null;
  paymentType?: PaymentType | null;
}

export interface CartContextType {
  deliveryInfo: DeliveryInfo;

  addItemsToCart: (order: Order) => void;
  removeItemsToCart: (order: Order) => void;
  increaseCounterFromCartOrder: (order: Order) => void;
  decreaseCounterFromCartOrder: (order: Order) => void;

  setPaymentType: (paymentType: PaymentType) => void;
  addUserToDeliveryInfo: (user: User) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProps) {
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>(() => {
    try {
      const storageStateAsJSON = localStorage.getItem(
        '@02-desafio-react-coffe:deliveryInfo-1.0.0'
      );
      console.log('pegando item ', storageStateAsJSON);
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
      } else {
        return {
          userDelivery: null,
          cart: { orders: [] },
          paymentType: null,
        };
      }
    } catch (ex) {
      console.log('erro no construtor', ex);
    }
  });

  useEffect(() => {}, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(deliveryInfo);
    console.log('setando item ', stateJSON);
    localStorage.setItem(
      '@02-desafio-react-coffe:deliveryInfo-1.0.0',
      stateJSON
    );
  }, [deliveryInfo]);

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

  function setPaymentType(paymentType: PaymentType) {
    setDeliveryInfo((state) => {
      const newDeliveryInfo: DeliveryInfo = {
        ...state,
        paymentType: paymentType,
      };
      console.log('setPaymentType:newDeliveryInfo', newDeliveryInfo);
      return newDeliveryInfo;
    });
  }

  function addUserToDeliveryInfo(user: User) {
    setDeliveryInfo((state) => {
      const newDeliveryInfo: DeliveryInfo = {
        ...state,
        userDelivery: user,
      };
      console.log('addUserToDeliveryInfo', newDeliveryInfo);
      return newDeliveryInfo;
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
        setPaymentType,
        addUserToDeliveryInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
