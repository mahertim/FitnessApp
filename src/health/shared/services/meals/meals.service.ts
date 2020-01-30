import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable, of } from 'rxjs';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Meal } from '../../models/meal.model';

@Injectable()
export class MealsService {
  constructor(
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

  getMeals(): Observable<Meal[]> {
    return this.db.list(`meals/${this.uid}`).valueChanges() as Observable<
      Meal[]
    >;
  }

  addMeal(meal: Meal): Observable<Meal> {
    this.db.list(`meals/${this.uid}`).push(meal);
    return of(meal);
  }
}
