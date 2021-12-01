import { createReducer, on } from '@ngrx/store';
import {changePage, changeNumOfPages} from "./pagination.actions";
import Pagination from "../../interfaces/pagination-interface";

export const initialState: Pagination = {
  currentPage: 1,
  totalPages: 10,
  pageLimit: 12
};

export const paginationReducer = createReducer(
  initialState,
  on(changePage, (state, {num}) => {
    return {
      ...state,
      currentPage: num
    }
  }),
  on(changeNumOfPages, (state, {num}) => {
    return {
      ...state,
      totalPages: num,
      currentPage: 1
    }
  })
);
