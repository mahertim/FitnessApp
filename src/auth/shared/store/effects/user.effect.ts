import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthService } from '../../services/auth/auth.service';
import * as fromActions from '../actions';
import * as fromRoot from '../../../../app/store';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_USER),
      switchMap(() => {
        return this.authService.loadUser().pipe(
          map((user) => {
            if (user === null) {
              return new fromActions.LoadUserFail('null user');
            }
            return new fromActions.LoadUserSuccess(user);
          }),
          catchError((error) => of(new fromActions.LoadUserFail(error))),
        );
      }),
    ),
  );

  loadUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_USER_SUCCESS),
      switchMap(() => {
        return of(new fromRoot.Go({ path: [''] }));
      }),
    ),
  );

  loadUserFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_USER_FAIL),
      switchMap(() => {
        return of(new fromRoot.Go({ path: ['/auth/login'] }));
      }),
    ),
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOGIN_USER),
      map((action: fromActions.LoginUser) => action.payload),
      switchMap((loginDetails) => {
        return this.authService
          .loginUser(loginDetails.email, loginDetails.password)
          .pipe(
            map((user) => {
              if (user == null) {
                return new fromActions.LoginUserFail('null return');
              }
              return new fromActions.LoginUserSuccess(user);
            }),
          );
      }),
    ),
  );

  loginUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOGIN_USER_SUCCESS),
      map(() => new fromRoot.Go({ path: ['/'] })),
    ),
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
