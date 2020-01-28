import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, of } from 'rxjs';

import * as fromStore from '../../../auth/shared/store';
import { AuthService } from '../../../auth/shared/services/auth/auth.service';
import { User } from '../../../auth/shared/models/user.model';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User | null> = of(null);
  subscription: Subscription | null = null;

  constructor(
    private store: Store<fromStore.AuthState>,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select(fromStore.getUser);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
