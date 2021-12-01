import { createFeatureSelector } from '@ngrx/store';
import {Product} from '../../interfaces/product-interface';

export const selectWishList = createFeatureSelector<ReadonlyArray<Product>>('wishList');
