import { createAction, props } from '@ngrx/store';

export const changePage = createAction(
  'CHANGE_PAGE',
  props<{ num: number }>()
);

export const changeNumOfPages  = createAction(
  'CHANGE_NUMBER_OF_PAGES',
  props<{ num: number }>()
);
