import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMeals from './meals.reducer';

import { MealsAction } from '../actions/meals.action';

export interface HealthState {
  mealsState: fromMeals.MealsState;
}

export const initialState: HealthState = {
  mealsState: fromMeals.initialState,
};

export type HealthAction = MealsAction;

export const reducers: ActionReducerMap<HealthState, HealthAction> = {
  mealsState: fromMeals.reducer,
};

export const getHealthState = createFeatureSelector<HealthState>('health');
