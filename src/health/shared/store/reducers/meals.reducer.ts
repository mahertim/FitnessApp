import { Meal } from '../../models/meal.model';

import * as fromActions from '../actions/meals.action';

export interface MealsState {
  meals: Meal[] | [];
}

export const initialState: MealsState = {
  meals: [],
};

export function reducer(
  state: MealsState = initialState,
  action: fromActions.MealsAction,
): MealsState {
  switch (action.type) {
    case fromActions.SET_MEALS: {
      return {
        ...state,
        meals: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
  return { ...state };
}

export const getMealsStateMeals = (state: MealsState) => state.meals;
