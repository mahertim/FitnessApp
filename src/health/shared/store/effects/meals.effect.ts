import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from '../actions';
import { Go } from '../../../../app/store/actions/router.action';
import { Meal } from '../../models/meal.model';
import { MealsService } from '../../services/meals/meals.service';

@Injectable()
export class MealsEffects {
  loadMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LOAD_MEALS),
      switchMap(() => {
        return this.mealsService.getMeals().pipe(
          map((meals) => new fromActions.LoadMealsSuccess(meals)),
          catchError((error) => of(new fromActions.LoadMealsFail(error))),
        );
      }),
    ),
  );

  addMeal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.ADD_MEAL),
      map((action: fromActions.AddMeal) => action.payload),
      switchMap((meal: Meal) => {
        return this.mealsService.addMeal(meal).pipe(
          map((theMeal) => new fromActions.AddMealSuccess(theMeal)),
          catchError((error) => of(new fromActions.AddMealFail(error))),
        );
      }),
    ),
  );

  addMealSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.ADD_MEAL_SUCCESS),
      map((action: fromActions.AddMealSuccess) => action.payload),
      map((_meal: Meal) => {
        return new Go({ path: ['/meals/'] });
      }),
    ),
  );

  constructor(private actions$: Actions, private mealsService: MealsService) {}
}
