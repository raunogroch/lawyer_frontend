import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import {
  loadFromLocalStorage,
  loadFromLocalStorageSuccess,
} from '../auth/state/auth.action';
import { IUser } from '../models/User.model';

export const authGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const uuidExist = localStorage.getItem('UUID');

  console.log('entro auth');

  if (!uuidExist) {
    return true;
  }

  router.navigate(['dashboard/main']);
  return true;
};
