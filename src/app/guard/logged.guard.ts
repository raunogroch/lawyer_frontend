import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadFromLocalStorageSuccess } from '../auth/state/auth.action';

export const loggedGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const store = inject(Store);

  const uuidExist = localStorage.getItem('UUID');
  if (uuidExist) {
    store.dispatch(loadFromLocalStorageSuccess());
    return true;
  }
  router.navigate(['auht/login']);
  return false;
};
