import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../../shared/store';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  error = '';

  constructor(private store: Store<fromStore.AuthState>) {}

  loginUser(event: FormGroup) {
    this.store.dispatch(new fromStore.LoginUser(event.value));
  }
}
