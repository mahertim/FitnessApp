import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';

import { UserAction } from '../actions/user.action';

export interface AuthState {
  userState: fromUser.UserState;
}

export type AuthAction = UserAction;

export const reducers: ActionReducerMap<AuthState, AuthAction> = {
  userState: fromUser.reducer,
};

export const getAuthState = createFeatureSelector<AuthState>('auth');
