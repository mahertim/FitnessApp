import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromMeals from '../reducers/meals.reducer';
import { Meal } from '../../models/meal.model';

import * as fromRoot from '../../../../app/store';

export const getMealsState = createSelector(
  fromFeature.getHealthState,
  (state: fromFeature.HealthState) => state.mealsState,
);

export const getMealEntities = createSelector(
  getMealsState,
  (state: fromMeals.MealsState) => state.mealEntities,
);

export const getMeals = createSelector(
  getMealsState,
  (state: fromMeals.MealsState) =>
    Object.keys(state.mealEntities).map(($key) => state.mealEntities[$key]),
);

export const getSelectedMeal = createSelector(
  getMealEntities,
  fromRoot.getRouterState,
  (entities, router): Meal | null => {
    console.log(router);
    console.log(router.state);
    if (router && router.state) {
      return entities[router.state.params.mealKey];
    }
    return null;
  },
);

export const getMealsLoaded = createSelector(
  getMealsState,
  (state: fromMeals.MealsState) => state.loaded,
);

export const getMealsLoading = createSelector(
  getMealsState,
  (state: fromMeals.MealsState) => state.loading,
);
