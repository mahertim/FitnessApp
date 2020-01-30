import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../../shared/store';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  error = '';

  constructor(private store: Store<fromStore.AuthState>) {
    console.log(this.store);
  }

  async registerUser(event: FormGroup) {
    console.log(event);
  }
}
