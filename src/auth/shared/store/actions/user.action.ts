import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

// load user
export const LOAD_USER = '[Auth] Load User';
export const LOAD_USER_SUCCESS = '[Auth] Load User Success';
export const LOAD_USER_FAIL = '[Auth] Load User Fail';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor() {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;
  constructor(public payload: any) {}
}

// login user
export const LOGIN_USER = '[Auth] Login User';
export const LOGIN_USER_SUCCESS = '[Auth] Login User Success';
export const LOGIN_USER_FAIL = '[Auth] Login User Fail';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class LoginUserFail implements Action {
  readonly type = LOGIN_USER_FAIL;
  constructor(public payload: any) {}
}

// action types
export type UserAction =
  | LoadUser
  | LoadUserSuccess
  | LoadUserFail
  | LoginUser
  | LoginUserSuccess
  | LoginUserFail;
