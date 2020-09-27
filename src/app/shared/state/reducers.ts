import * as fromApplication from './application/reducer';

/**
 * 로그인 / 로그아웃 상태
 */
export interface State {
    application: fromApplication.State;
}
/**
 * 어플리케이션 리듀서
 */
export const reducers = {
    application: fromApplication.reducer
};

/**
 * 로그인 여부를 반환한는 함수
 * @param state : 로그인/로그아웃 상태
 */
export function selectIsLoggedIn(state: State) {
    return state.application.isLoggedIn;
}
