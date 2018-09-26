import { Component, HostBinding, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

import * as fromRoot from '../shared/state/reducers';
import * as ApplicationActions from '../shared/state/application/actions';
import { ApplicationEffects } from '../shared/state/application/effects';

import { MainMenuService } from '../shared/services/main-menu.service';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public logoutDisplay = false as boolean;
  public userInfoBar = false as boolean;
  public logoutTimer: string;

  @HostBinding('class.application') class = 'application';
  constructor(
    private translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private effects: ApplicationEffects,
    public mainMenu: MainMenuService) {

    // Initial logoutTimer 
    let min = Math.floor(this.effects.APPLICATION_TIMEOUT_TIME / 60).toString();
    let sec = Math.floor(this.effects.APPLICATION_TIMEOUT_TIME % 60).toString();

    this.logoutTimer = this.padLeft(min, '0', 2) + ':' + this.padLeft(sec, '0', 2);

  }

  /**
   * 화면 초기실행
   * 로그아웃 타이머가 만료된 경우 자동 로그아웃 처리
   * 이전 화면에서 넘겨준 언어 인수값을 설정, 넘겨준 값이 없는 경우 한국어로 설정
   * 설정된 언어코드로 언어 번역
   */
  ngOnInit() {
    // 자동 로그아웃
    if (environment.production) {
      this.store.select(fromRoot.selectIsLoggedIn).subscribe(res => {
        if (!res) {
          this.logoutDisplay = true;
        }
      });
    }

    // 언어 설정
    this.route.params.pipe(map(params => params['lang'])).subscribe((lang) => {
      if (lang) {
        this.mainMenu.setLanguage(lang);
      } else {
        this.mainMenu.setLanguage('ko');
      }
    });

    // 언어 번역
    this.translate.setDefaultLang(this.mainMenu.getLanguage());

    this.translate.get('main.sideMenu').subscribe(res => {
      this.mainMenu.setMenuItems(res);
    });

    // 잔여시간 출력
    interval(1000).subscribe(() => {
      let min = Math.floor(this.effects.counter / 60).toString();
      let sec = Math.floor(this.effects.counter % 60).toString();

      this.logoutTimer = this.padLeft(min, '0', 2) + ':' + this.padLeft(sec, '0', 2);
    });
  }

  /**
   * 변경 체크
   * 변경이 발생한 경우 (입력, 버튼 클릭 등) 로그아웃 시간 연장
   */
  // ngDoCheck() {
  //   this.store.dispatch(new ApplicationActions.ExtendLogoutTimer());
  // }

  /**
  * 모바일 메뉴 토글 버튼
  * 모바일 화면에서 우측 메인 메뉴 활성화, 비활성화 토글 
  * @param event : 이벤트
  */
  public onMenuButtonClick(event: Event) {
    event.preventDefault();
    this.mainMenu.setMenuActive(!this.mainMenu.getMenuActive());
  }

  /**
   * 데스크탑 화면의 상단 메뉴 토클 버튼
   * 로고 우측 버튼 클릭하면 좌측 메뉴 숨김, 다시 클릭하면 메뉴 보이기
   * @param event : 이벤트
   */
  public onMenuInactive(event: Event) {
    event.preventDefault();
    this.mainMenu.setMenuInactive(!this.mainMenu.getMenuInactive());
  }

  /**
   * 언어설정
   * 사용자가 선택한 언어로 설정 후 번역
   * 메인 메뉴의 언어설정 / 화면 우측 메뉴경로 설정
   * @param language : 언어코드
   */
  public useLanguage(language: string) {

    this.mainMenu.setLanguage(language);
    this.translate.use(language);

    this.translate.get('main.sideMenu').subscribe(res => {
      this.mainMenu.setMenuItems(res);
      this.mainMenu.setBreadItems(res);
    });
  }

  /**
   * 사용자 정보
   */
  public userInfo() {
    this.userInfoBar = true;

  }

  /**
   * 로그아웃
   * 로그아웃 팝업창 보여주는 변수 false 설정
   * 세션 스토리지에서 토큰 삭제
   * 로그이웃 클릭한 경우 로그아웃 변수를 false로 설정
   * 로그인 화면으로 이동
   */
  public logout() {
    this.logoutDisplay = false;
    localStorage.removeItem('AuthToken');
    this.store.dispatch(new ApplicationActions.LogOut());
    this.router.navigate(['/login']);
  }

  public padLeft(text: string, padChar: string, size: number): string {
    return (String(padChar).repeat(size) + text).substr((size * -1), size);
  }

}
