import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

// load pizzas
export const SET_USER = '[Auth] Set User';

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload: User | null) {}
}

// action types
export type UserAction = SetUser;
