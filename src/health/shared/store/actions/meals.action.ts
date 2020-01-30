import { Action } from '@ngrx/store';

import { Meal } from '../../models/meal.model';

// set meals
export const LOAD_MEALS = '[Health] Load Meals';
export const LOAD_MEALS_SUCCESS = '[Health] Load Meals Success';
export const LOAD_MEALS_FAIL = '[Health] Load Meals Fail';

export class LoadMeals implements Action {
  readonly type = LOAD_MEALS;
  constructor() {}
}

export class LoadMealsSuccess implements Action {
  readonly type = LOAD_MEALS_SUCCESS;
  constructor(public payload: Meal[]) {}
}

export class LoadMealsFail implements Action {
  readonly type = LOAD_MEALS_FAIL;
  constructor(public payload: any) {}
}

// add meal
export const ADD_MEAL = '[Health] Add Meal';
export const ADD_MEAL_SUCCESS = '[Health] Add Meal Success';
export const ADD_MEAL_FAIL = '[Health] Add Meal Fail';

export class AddMeal implements Action {
  readonly type = ADD_MEAL;
  constructor(public payload: Meal) {}
}

export class AddMealSuccess implements Action {
  readonly type = ADD_MEAL_SUCCESS;
  constructor(public payload: Meal) {}
}

export class AddMealFail implements Action {
  readonly type = ADD_MEAL_FAIL;
  constructor(public payload: any) {}
}

// action types
export type MealsAction =
  | LoadMeals
  | LoadMealsSuccess
  | LoadMealsFail
  | AddMeal
  | AddMealSuccess
  | AddMealFail;
