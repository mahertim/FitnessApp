import { User } from '../../models/user.model';

import * as fromActions from '../actions/user.action';

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null,
};

export function reducer(
  state: UserState = initialState,
  action: fromActions.UserAction,
): UserState {
  switch (action.type) {
    case fromActions.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default: {
      return { ...state };
    }
  }
  return { ...state };
}

export const getUserStateUser = (state: UserState) => state.user;
