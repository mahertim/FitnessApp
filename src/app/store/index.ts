import {
  ActionReducerMap,
  createFeatureSelector,
  combineReducers,
  ActionReducer,
} from '@ngrx/store';

import * as fromAuth from '../../auth/shared/store';
import * as fromHealth from '../../health/shared/store';

export interface AppState {
  authState: fromAuth.AuthState;
  healthState: fromHealth.HealthState;
}

export const initialState: AppState = {
  authState: fromAuth.initialState,
  healthState: fromHealth.initialState,
};

export type AppAction = fromAuth.AuthAction | fromHealth.HealthAction;

export const reducers: ActionReducerMap<AppState, AppAction> = {
  authState: combineReducers(fromAuth.reducers) as ActionReducer<
    fromAuth.AuthState,
    AppAction
  >,
  healthState: combineReducers(fromHealth.reducers) as ActionReducer<
    fromHealth.HealthState,
    AppAction
  >,
};

export const getAppState = createFeatureSelector<AppState>('app');
