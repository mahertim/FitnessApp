import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { map } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromStore.AuthState>) {}

  canActivate() {
    this.store.dispatch(new fromStore.LoadUser());
    return this.store.select(fromStore.getUser).pipe(
      map((user) => {
        if (!user) {
          return false;
        } else {
          return true;
        }
      }),
    );
  }
}
