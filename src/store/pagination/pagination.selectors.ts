import { createFeatureSelector } from '@ngrx/store';
import Pagination from "../../interfaces/pagination-interface";

export const selectPagination = createFeatureSelector<Pagination>('pagination');
