import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';
import * as fromStore from '../../store';
import * as fromActions from '../../store/actions';

@Injectable()
export class AuthService {
  auth$ = this.af.authState.pipe(
    tap((next) => {
      if (!next) {
        this.store.dispatch(new fromActions.SetUser(null));
        return;
      } else {
        const user: User = {
          email: next.email,
          uid: next.uid,
          authenticated: true,
        };
        this.store.dispatch(new fromActions.SetUser(user));
      }
    }),
  );

  constructor(
    private store: Store<fromStore.AuthState>,
    private af: AngularFireAuth,
  ) {}

  get user() {
    return this.af.auth.currentUser;
  }

  get authState() {
    return this.af.authState;
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logoutUser() {
    return this.af.auth.signOut();
  }
}
