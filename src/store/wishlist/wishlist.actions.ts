import { createAction, props } from '@ngrx/store';
import {Product} from '../../interfaces/product-interface';

export const addToWishList = createAction(
  'ADD_TO_WISH_LIST',
  props<{ product: Product }>()
);

export const removeFromWishList = createAction(
  'REMOVE_FROM_WISH_LIST',
  props<{ product: Product }>()
);

export const clearWishList = createAction(
  'CLEAR_WISH_LIST'
);
