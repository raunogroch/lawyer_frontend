import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { IUser } from '../models/User.model';
import { Store } from '@ngrx/store';
import {
  loadFromLocalStorage,
  loadFromLocalStorageSuccess,
  loginSuccess,
} from '../auth/state/auth.action';

export const loggedGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  const uuidExist = localStorage.getItem('UUID');
  if (uuidExist) {
    const store = inject(Store);
    store.dispatch(loadFromLocalStorageSuccess());
    return true;
  }
  router.navigate(['login']);
  return true;
};
