import { createFeatureSelector } from '@ngrx/store';
import {Product} from '../../interfaces/product-interface';

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');
