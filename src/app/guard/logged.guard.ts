import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const loggedGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  const uuidExist = localStorage.getItem('UUID');
  if (uuidExist) {
    return true;
  }
  router.navigate(['login']);
  return true;
};
