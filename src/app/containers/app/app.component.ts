import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { User } from '../../../auth/shared/models/user.model';

import * as fromAuth from '../../../auth/shared/store';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  user$: Observable<User | null> = of(null);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new fromAuth.LoadUser());
    this.user$ = this.store.select(fromAuth.getUser);
  }

  onLogout() {
    this.store.dispatch(new fromAuth.SignOutUser());
  }
}
