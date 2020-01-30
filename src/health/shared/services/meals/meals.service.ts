import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable, of } from 'rxjs';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Meal } from '../../models/meal.model';
import { map } from 'rxjs/operators';

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
    const meals$: Observable<Meal[]> = this.db
      .list(`meals/${this.uid}`)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            $key: c.payload.key,
            ...(c.payload.val() as Meal),
          })),
        ),
      );
    return meals$;
  }

  addMeal(meal: Meal): Observable<Meal> {
    let key = '';
    this.db
      .list(`meals/${this.uid}`)
      .push(meal)
      .then((next) => {
        key = ((next as unknown) as { getKey: () => string }).getKey();
      });
    const theMeal: Observable<Meal> = this.db
      .list(`meals/${this.uid}`, (ref) =>
        ref
          .orderByKey()
          .equalTo(key)
          .limitToFirst(1),
      )
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            $key: c.payload.key,
            ...(c.payload.val() as Meal),
          })),
        ),
        map((meals: Meal[]) => meals[0]),
      );
    return theMeal;
  }

  removeMeal(meal: Meal) {
    this.db.list(`meals/${this.uid}`).remove(meal.$key);
    return of(meal);
  }
}
