import { AuthReducer } from '../auth/state/auth.reducer';
import { AuthState } from '../auth/state/auth.state';
import { SharedReducer } from './shared/shared.reducers';
import { SharedState } from './shared/shared.state';

export interface AppState {
  shared: SharedState;
  credentials: AuthState;
}

export const appReducer = {
  shared: SharedReducer,
  credentials: AuthReducer,
};
