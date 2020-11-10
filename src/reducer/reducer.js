import { storeProducts, detailProduct } from "../data";
import {
  ADD_CART,
  HANDEL_DELETE,
  INCREMENT,
  DECREMENT,
  CLEAR_CART,
  DETAILSPRODUCT,
} from "./action";

const initialState = {
  products: storeProducts,
  detailProduct: detailProduct,
  cart: [],
  detailsProduct: [],
  cartSubtotal: 0,
  cartTax: 0.1,
  cartTotal: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: //  =>  Done
      return {
        ...state,
        cart: [...state.cart, action.payload.product],
      };
    case DETAILSPRODUCT:
      console.log(state);

      return {
        ...state,
        detailsProduct: state.products.filter(
          (item) => item.id === action.payload.id
        ),
      };
    case HANDEL_DELETE: //  =>   Done
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case INCREMENT: //  =>   Done
      let incrCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: incrCart };
    case DECREMENT: //  =>   Done
      let decrCart = [];
      if (action.payload.count === 1) {
        decrCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, count: cartItem.count };
          }
          return cartItem;
        });
      } else {
        decrCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, count: cartItem.count - 1 };
          }
          return cartItem;
        });
      }
      return { ...state, cart: decrCart };
    case CLEAR_CART: //  =>   Done
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
