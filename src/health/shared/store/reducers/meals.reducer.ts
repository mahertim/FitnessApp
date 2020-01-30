import { Meal } from '../../models/meal.model';

import * as fromActions from '../actions/meals.action';

export interface MealsState {
  meals: Meal[] | [];
  loading: boolean;
  loaded: boolean;
}

export const initialState: MealsState = {
  meals: [],
  loading: false,
  loaded: false,
};

export function reducer(
  state: MealsState = initialState,
  action: fromActions.MealsAction,
): MealsState {
  switch (action.type) {
    case fromActions.LOAD_MEALS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case fromActions.LOAD_MEALS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        meals: action.payload,
      };
    }

    case fromActions.LOAD_MEALS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }

    case fromActions.ADD_MEAL: {
      return {
        ...state,
      };
    }

    case fromActions.ADD_MEAL_SUCCESS: {
      return {
        ...state,
        meals: [...state.meals, action.payload],
      };
    }

    default: {
      return { ...state };
    }
  }
  return { ...state };
}

export const getMealsStateMeals = (state: MealsState) => state.meals;
