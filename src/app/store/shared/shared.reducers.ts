import { createReducer, on } from '@ngrx/store';
import { setErrorMessage, setLoader } from './shared.actions';
import { initialState } from './shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoader, (state, action) => {
    return { ...state, showLoading: action.status };
  }),
  on(setErrorMessage, (state, action) => {
    return { ...state, errorMessage: action.message };
  })
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
