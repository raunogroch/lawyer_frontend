import { createAction, props } from '@ngrx/store';

const SET_LOADER = '[Share State] Set loading';

const SET_ERROR_MESSAGE = '[Share State] Set error message';

export const setLoader = createAction(SET_LOADER, props<{ status: boolean }>());

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
