import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';

import * as fromUser from '../reducers/user.reducer';

export const getUserState = createSelector(
  fromFeature.getAuthState,
  (state: fromFeature.AuthState) => state.userState,
);

export const getUser = createSelector(getUserState, fromUser.getUserStateUser);

export const getUserLoading = createSelector(
  getUserState,
  (state: fromUser.UserState) => state.loading,
);

export const getUserLoaded = createSelector(
  getUserState,
  (state: fromUser.UserState) => state.loaded,
);
