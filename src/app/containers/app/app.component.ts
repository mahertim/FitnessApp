import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, Subscription, of } from 'rxjs';

import { AuthService } from '../../../auth/shared/services/auth/auth.service';
import { User } from '../../../auth/shared/models/user.model';

import * as fromAuth from '../../../auth/shared/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User | null> = of(null);
  subscription: Subscription | null = null;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select(fromAuth.getUser);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
