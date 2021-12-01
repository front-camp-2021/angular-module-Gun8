import { createReducer, on } from '@ngrx/store';

import { retrievedProducts } from './products.actions';
import {Product} from '../../interfaces/product-interface';

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(retrievedProducts, (state, { products }) => products)
);
