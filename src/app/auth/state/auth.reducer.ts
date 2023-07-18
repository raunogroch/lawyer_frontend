import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';
import {
  loadFromLocalStorage,
  loginSuccess,
  logoutSession,
} from './auth.action';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      redirect: true,
    };
  }),
  on(loadFromLocalStorage, (state, action) => {
    return { ...state, user: action.user };
  }),
  on(logoutSession, (state) => {
    return { ...state, initialState };
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
