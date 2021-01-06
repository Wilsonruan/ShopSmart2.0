import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";
import Axios from 'axios';

export const addToCart = (productID, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productID}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    }
  })
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};