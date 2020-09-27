import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromRoot from '../state/reducers';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  /**
   * 페이지를 이동할 수 있는지를 체크
   * 로그인 변수가 True인 경우 다음 페이지로 이동
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (environment.production) {
      return this.store.select(fromRoot.selectIsLoggedIn);
    } else {
      return true;
    }
  }

}
