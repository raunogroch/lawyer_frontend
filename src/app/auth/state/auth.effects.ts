import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.action';
import { exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action: any) => {
        return this.authService.login(action.credentials).pipe(
          map((data) => {
            localStorage.setItem('UUID', JSON.stringify(data));
            return loginSuccess({ user: data });
          })
        );
      })
    );
  });
}
