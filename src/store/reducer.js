import React, { useReducer } from 'react';
import {
  ADD_ORDER,
  CLOSE_ALERT,
  FETCH_GOODS,
  MINUS_ORDER_COUNT,
  PLUS_ORDER_COUNT,
  REMOVE_ORDER,
  SHOW_BASKET,
} from './action';

export const goodsState = {
  goods: [],
  loading: true,
  orders: [],
  showBasket: false,
  showAlert: '',
};

export const goodsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_GOODS:
      return {
        ...state,
        goods: action.payload,
        loading: false,
      };
    case ADD_ORDER:
      const orders = [...state.orders];

      if (!orders.length) {
        orders.push(action.payload);
      } else {
        const checkOrders = orders.find(
          order => action.payload.id === order.id
        );

        if (checkOrders) {
          checkOrders.quantity += 1;
        } else {
          orders.push(action.payload);
        }
      }

      return {
        ...state,
        orders,
        showAlert: action.payload.title,
      };
    case REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => action.payload !== order.id),
      };
    case PLUS_ORDER_COUNT:
      {
        const checkOrders = state.orders.find(
          order => action.payload === order.id
        );

        if (checkOrders) {
          checkOrders.quantity += 1;
        }
      }

      return {
        ...state,
        orders: state.orders,
      };
    case MINUS_ORDER_COUNT: {
      const checkOrders = state.orders.find(
        order => action.payload === order.id
      );

      if (checkOrders) {
        checkOrders.quantity -= 1;
      }

      let orders = state.orders;

      if (checkOrders.quantity < 1) {
        orders = state.orders.filter(order => action.payload !== order.id);
      }
      return {
        ...state,
        orders,
      };
    }
    case SHOW_BASKET:
      return {
        ...state,
        showBasket: !state.showBasket,
      };
    case CLOSE_ALERT:
      return {
        ...state,
        showAlert: '',
      };
    default:
      return state;
  }
};

export const MainContext = React.createContext(goodsState);

export const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(goodsReducer, goodsState);
  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};
