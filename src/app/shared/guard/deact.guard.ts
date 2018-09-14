import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromRoot from '../state/reducers';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactGuard implements CanDeactivate<CanComponentDeactivate> {

  private login = true as boolean;
  
  constructor(
    private store: Store<fromRoot.State>) {
  }

  /**
   * 다음 페이지 이동여부를 설정하는 가드
   * 로그인 여부를 체크하여 로그인되어 있지 않으면 무조건 화면 나간다.
   * 그렇지 않은 경우 컴포넌트의 canDeactivate() 메서드에 정의된 코드에 따라 이동여부를 결정한다.
   * @param component 
   */
  canDeactivate(component: CanComponentDeactivate) {
    this.store.select(fromRoot.selectIsLoggedIn).subscribe(res => {
      this.login = res;
    });

    if (!this.login) {
      return true;
    } else {
      return component.canDeactivate ? component.canDeactivate() : true;
    }

  }
}
