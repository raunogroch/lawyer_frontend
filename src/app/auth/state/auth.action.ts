import { createAction, props } from '@ngrx/store';
import { ICredentials } from 'src/app/models/Credential.model';
import { IUser } from 'src/app/models/User.model';

export const LOGIN_START = '[Auth Page] login start';
export const LOGIN_SUCCESS = '[Auth Page] login success';
export const LOGIN_FAIL = '[Auth Page] login fail';
export const LOAD_FROM_LOCALSTORAGE = '[Storage] Load From LocalStorage';
export const LOAD_FROM_LOCALSTORAGE_SUCCESS =
  '[Storage] Load From LocalStorage Success';

export const loginStart = createAction(
  LOGIN_START,
  props<{ credentials: ICredentials }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: IUser; redirect: boolean }>()
);

export const loadFromLocalStorage = createAction(
  LOAD_FROM_LOCALSTORAGE,
  props<{ user: IUser }>()
);

export const loadFromLocalStorageSuccess = createAction(
  LOAD_FROM_LOCALSTORAGE_SUCCESS
);
