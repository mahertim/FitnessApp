import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';

import * as fromMeals from '../reducers/meals.reducer';

export const getMealsState = createSelector(
  fromFeature.getHealthState,
  (state: fromFeature.HealthState) => state.mealsState,
);

export const getMeals = createSelector(
  getMealsState,
  fromMeals.getMealsStateMeals,
);
