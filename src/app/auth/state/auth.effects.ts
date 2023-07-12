import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadFromLocalStorage,
  loadFromLocalStorageSuccess,
  loginStart,
  loginSuccess,
} from './auth.action';
import {
  catchError,
  exhaustMap,
  map,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import {
  setErrorMessage,
  setLoader,
} from 'src/app/store/shared/shared.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/User.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action: any) => {
        return this.authService.login(action.credentials).pipe(
          map((data) => {
            this.store.dispatch(setLoader({ status: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            localStorage.setItem('UUID', JSON.stringify(data));
            return loginSuccess({ user: data, redirect: true });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoader({ status: false }));
            return of(setErrorMessage({ message: errResp.error }));
          })
        );
      })
    );
  });
  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          if (action.redirect) {
            this.router.navigate(['dashboard/main']);
          }
        })
      );
    },
    { dispatch: false }
  );

  loadFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadFromLocalStorageSuccess),
        withLatestFrom(this.store),
        tap(([action]) => {
          const uuid = localStorage.getItem('UUID');

          if (uuid !== null) {
            this.store.dispatch(
              loadFromLocalStorage({ user: JSON.parse(uuid) })
            );
          }
        })
      ),
    { dispatch: false }
  );
}
