import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { map } from 'rxjs/operators';

import { User } from '../../models/user.model';

@Injectable()
export class AuthService {
  user: User | null = null;

  constructor(private af: AngularFireAuth) {}

  get authState() {
    return this.af.authState;
  }

  loadUser() {
    return this.af.authState.pipe(
      map(
        (next) =>
          (this.user = next
            ? {
                email: next.email ? next.email : '',
                uid: next.uid,
                authenticated: true,
              }
            : null),
      ),
    );
  }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    this.af.auth.signInWithEmailAndPassword(email, password);
    const user = this.af.authState.pipe(
      map((next) => {
        if (!next) {
          return null;
        } else {
          return {
            email: next.email,
            uid: next.uid,
            authenticated: true,
          };
        }
      }),
    );
    return user;
  }

  logoutUser() {
    return this.af.auth.signOut();
  }
}
