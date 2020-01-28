import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import * as fromStore from '../../store';
import { Meal } from '../../models/meal.model';

@Injectable()
export class MealsService {
  meals$: Observable<Meal[]> = this.db
    .list<Meal>(`meals/${this.uid}`)
    .valueChanges()
    .pipe(tap((next) => this.store.dispatch(new fromStore.SetMeals(next))));

  constructor(
    private store: Store<fromStore.HealthState>,
    private db: AngularFireDatabase,
    private authService: AuthService,
  ) {}

  get uid() {
    if (this.authService.user) {
      return this.authService.user.uid;
    } else {
      return null;
    }
  }
}
