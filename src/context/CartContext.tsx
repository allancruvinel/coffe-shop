import { createContext, ReactNode, useEffect, useReducer } from 'react';
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
  const [deliveryInfo, dispatch] = useReducer(
    (state: DeliveryInfo, action: any) => {
      if (action.type === 'ADD_ITEM_TO_CART') {
        return {
          ...state,
          cart: {
            ...state.cart,
            orders: [...state.cart.orders, action.payload.order],
          },
        };
      }

      if (action.type === 'SET_PAYMENT_TYPE') {
        return {
          ...state,
          paymentType: action.payload.paymentType,
        };
      }

      if (action.type === 'ADD_USER_TO_DELIVERY_INFO') {
        return {
          ...state,
          userDelivery: action.payload.user,
        };
      }

      if (action.type === 'REMOVE_ITEMS_TO_CART') {
        return {
          ...state,
          cart: {
            ...state.cart,
            orders: state.cart.orders.filter(
              (cartOrder) => cartOrder.id !== action.payload.order.id
            ),
          },
        };
      }
      if (action.type === 'INCREASE_COUNTER_FROM_CART_ORDER') {
        return {
          ...state,
          cart: {
            ...state.cart,
            orders: state.cart.orders.map((cartOrder) => {
              if (cartOrder.id === action.payload.order.id)
                return {
                  ...cartOrder,
                  quantity: cartOrder.quantity + 1,
                };
              return cartOrder;
            }),
          },
        };
      }

      if (action.type === 'DECREASE_COUNTER_FROM_CART_ORDER') {
        if (action.payload.order.quantity === 0) return state;
        return {
          ...state,
          cart: {
            ...state.cart,
            orders: state.cart.orders.map((cartOrder) => {
              if (cartOrder.id === action.payload.order.id)
                return {
                  ...cartOrder,
                  quantity: cartOrder.quantity - 1,
                };
              return cartOrder;
            }),
          },
        };
      }

      return state;
    },
    {
      userDelivery: null,
      cart: { orders: [] },
      paymentType: null,
    },
    (initialstate) => {
      const storageStateAsJSON = localStorage.getItem(
        '@02-desafio-react-coffe:deliveryInfo-1.0.0'
      );
      console.log('pegando item ', storageStateAsJSON);
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON);
      }
      return initialstate;
    }
  );

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
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        order,
      },
    });
    alert('item inserido no carrinho');
  }

  function setPaymentType(paymentType: PaymentType) {
    dispatch({
      type: 'SET_PAYMENT_TYPE',
      payload: {
        paymentType,
      },
    });
  }

  function addUserToDeliveryInfo(user: User) {
    dispatch({
      type: 'ADD_USER_TO_DELIVERY_INFO',
      payload: {
        user,
      },
    });
  }

  function removeItemsToCart(order: Order) {
    dispatch({
      type: 'REMOVE_ITEMS_TO_CART',
      payload: {
        order,
      },
    });
  }

  function increaseCounterFromCartOrder(order: Order) {
    dispatch({
      type: 'INCREASE_COUNTER_FROM_CART_ORDER',
      payload: {
        order,
      },
    });
  }
  function decreaseCounterFromCartOrder(order: Order) {
    dispatch({
      type: 'DECREASE_COUNTER_FROM_CART_ORDER',
      payload: {
        order,
      },
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
