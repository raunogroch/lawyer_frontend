import { createAction, props } from '@ngrx/store';
import { ICredentials } from 'src/app/models/Credential.model';
import { IUser } from 'src/app/models/User.model';

export const LOGIN_START = '[Auth Page] login start';
export const LOGIN_SUCCESS = '[Auth Page] login success';
export const LOGIN_FAIL = '[Auth Page] login fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ credentials: ICredentials }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: IUser }>()
);
