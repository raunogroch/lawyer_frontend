import { IUser } from 'src/app/models/User.model';

export interface AuthState {
  user: IUser | null;
}

export const initialState: AuthState = {
  user: null,
};
