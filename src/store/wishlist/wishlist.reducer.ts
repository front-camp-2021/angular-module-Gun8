import { createReducer, on } from '@ngrx/store';
import {addToWishList, removeFromWishList, clearWishList } from './wishlist.actions';
import {Product} from '../../interfaces/product-interface';

export const initialState: ReadonlyArray<Product> = [];

export const wishListReducer = createReducer(
  initialState,
  on(removeFromWishList, (state, { product }) => state.filter((item) => item.id !== product.id)),
  on(addToWishList, (state, { product }) => {
    if (state.findIndex(item => item.id === product.id) > -1) return state;

    return [...state, product];
  }),
  on(clearWishList, () => [])
);
