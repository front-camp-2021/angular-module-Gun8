import { createAction, props } from '@ngrx/store';
import {Product} from '../../interfaces/product-interface';

export const retrievedProducts = createAction(
  'RETRIEVE_PRODUCTS_SUCCESS',
  props<{ products: ReadonlyArray<Product> }>()
);
