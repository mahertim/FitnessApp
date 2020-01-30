import { User } from '../../models/user.model';

import * as fromActions from '../actions/user.action';

export interface UserState {
  user: User | null;
  loading: boolean;
  loaded: boolean;
}

export const initialState: UserState = {
  user: null,
  loading: false,
  loaded: false,
};

export function reducer(
  state: UserState = initialState,
  action: fromActions.UserAction,
): UserState {
  switch (action.type) {
    case fromActions.LOAD_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.LOAD_USER_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        user: {
          email: action.payload.email,
          uid: action.payload.uid,
          authenticated: true,
        },
      };
    }

    case fromActions.LOAD_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromActions.LOGIN_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.LOGIN_USER_SUCCESS: {
      const user = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        user,
      };
    }

    case fromActions.LOGIN_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    default: {
      return { ...state };
    }
  }
  return { ...state };
}

export const getUserStateUser = (state: UserState) => state.user;
