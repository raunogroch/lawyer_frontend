import { IUser } from 'src/app/models/User.model';

export interface AuthState {
  user: IUser | null;
  redirect: boolean;
}

export const initialState: AuthState = {
  user: null,
  redirect: false,
};
