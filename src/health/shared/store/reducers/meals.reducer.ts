import { Meal } from '../../models/meal.model';

import * as fromActions from '../actions/meals.action';

import { mapToEntities } from '../../util/map-to-entities.helper';

export interface MealsState {
  mealEntities: { [key: string]: Meal };
  loading: boolean;
  loaded: boolean;
}

export const initialState: MealsState = {
  mealEntities: {},
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
        mealEntities: mapToEntities(action.payload, state.mealEntities),
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
      };
    }

    case fromActions.ADD_MEAL_FAIL: {
      return {
        ...state,
      };
    }

    case fromActions.REMOVE_MEAL: {
      return {
        ...state,
      };
    }

    case fromActions.REMOVE_MEAL_SUCCESS: {
      const {
        [action.payload.$key]: removed,
        ...mealEntities
      } = state.mealEntities;
      return {
        ...state,
        mealEntities,
      };
    }

    case fromActions.REMOVE_MEAL_FAIL: {
      return {
        ...state,
      };
    }

    default: {
      return { ...state };
    }
  }
  return { ...state };
}
