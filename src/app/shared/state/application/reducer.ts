import * as ApplicationActions from './actions';

/**
 * 로그인 상태
 */
export interface State {
    isLoggedIn: boolean;
}

/**
 * 로그인 상태 초기값 false로 설정
 */
const initialState: State = {
    isLoggedIn: false
};

/**
 * 상태와 액션에 대한 리듀서 함수
 * 액션이 로그아웃인 경우 isLoggedIs 변수 false
 * 액션이 로그인인 경우 isLoggedIs 변수 true
 * @param state : 상태
 * @param action : 행동 (로그인, 로그아웃)
 */
export function reducer(state = initialState, action: ApplicationActions.All): State {
    switch (action.type) {
        case ApplicationActions.LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false
            };
        }

        case ApplicationActions.LOG_IN: {
            return {
                ...state,
                isLoggedIn: true
            };
        }

        default: {
            return state;
        }
    }
}
