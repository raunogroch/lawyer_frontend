import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateChildFn = (
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const uuidExist = localStorage.getItem('UUID');
  if (uuidExist) {
    router.navigate(['dashboard/main']);
    return false;
  }
  return true;
};
