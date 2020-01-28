import { Action } from '@ngrx/store';

import { Meal } from '../../models/meal.model';

// load pizzas
export const SET_MEALS = '[Health] Set Meals';

export class SetMeals implements Action {
  readonly type = SET_MEALS;
  constructor(public payload: Meal[] | []) {}
}

// action types
export type MealsAction = SetMeals;
