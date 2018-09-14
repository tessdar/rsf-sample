import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import * as ApplicationActions from './actions';

@Injectable()
export class ApplicationEffects {
    constructor(private actions$: Actions) { }

    /**
     * 타이머 시간 설정: ms
     * 타이머 설정: 로그아웃 타이머 연장 액션이 들어오면 로그아웃 액션 실행
     *           그렇지 않으면 설정된 로그아웃 타이머 설정 
     *           기본 30분 설정
     */
    APPLICATION_TIMEOUT_TIME = 1000 * 1800;

    @Effect()
    extendApplicationTimeout$ = this.actions$.pipe(
        switchMap((action: Action) => {        
            return timer(this.APPLICATION_TIMEOUT_TIME)
        }),
        map(() => {
            return new ApplicationActions.LogOut()
        })
    )
    
    // extendApplicationTimeout$ = this.actions$.pipe(switchMap((action: Action) => {        
    //     return timer(this.APPLICATION_TIMEOUT_TIME)
    // })).pipe(map(() => {
    //     return new ApplicationActions.LogOut()
    // }));

}