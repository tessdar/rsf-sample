import { Action } from '@ngrx/store';

/**
 * 액션 타입 정의
 * EXTEND_LOGOUT_TIMER: 로그아웃 타이머 연장
 * LOG_IN: 로그인
 * LOG_OUT: 로그아웃
 */
export const EXTEND_LOGOUT_TIMER = '[Application] Extend the logout timer.';
export const LOG_IN = '[Application] Log In';
export const LOG_OUT = '[Application] Log out';

export class ExtendLogoutTimer implements Action { readonly type = EXTEND_LOGOUT_TIMER; }
export class LogIn implements Action { readonly type = LOG_IN; }
export class LogOut implements Action { readonly type = LOG_OUT; }

export type All
    = ExtendLogoutTimer
    | LogIn
    | LogOut;
