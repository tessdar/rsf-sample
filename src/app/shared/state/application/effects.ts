import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';

import { timer, fromEvent, merge, interval } from 'rxjs';
import { mapTo, switchMap, takeUntil } from 'rxjs/operators';

import * as ApplicationActions from './actions';

@Injectable({
    providedIn: 'root',
})
export class ApplicationEffects {
    constructor() { }

    /**
     * 타이머 시간 설정: ms
     * 타이머 설정: Click, Keydown 실행 시 로그아웃 타이머 연장 수행
     *           그렇지 않으면 설정된 로그아웃 수행 
     *           기본 30분 설정
     */
    APPLICATION_TIMEOUT_TIME = 1800;
    counter = 0 as number;

    clickEvent = fromEvent(document, 'click');
    keydownEvent = fromEvent(document, 'keydown');
    actions = merge(this.clickEvent, this.keydownEvent);

    @Effect()
    extendApplicationTimeout$ = this.actions.pipe(
        switchMap(() => {
            const extendTimer = timer(this.APPLICATION_TIMEOUT_TIME * 1000);

            interval(1000).pipe(takeUntil(this.actions))
                .pipe(takeUntil(extendTimer)).subscribe((val) => {
                    this.counter = this.APPLICATION_TIMEOUT_TIME - (val + 1);
                });

            return extendTimer;
        }),
        mapTo(new ApplicationActions.LogOut())
    );
}