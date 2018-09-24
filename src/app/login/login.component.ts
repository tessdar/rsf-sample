import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/components/common/api';

// import { Store } from '@ngrx/store';

// import * as fromRoot from '../shared/state/reducers';
// import * as ApplicationActions from '../shared/state/application/actions';

import { MainMenuService } from '../shared/services/main-menu.service';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public msgs: Message[] = []; // i18n 텍스트 변환 변수

  public userform: FormGroup;

  @HostBinding('class.application') class = 'application';
  constructor(public router: Router,
    private translate: TranslateService,
    public mainMenu: MainMenuService,
    private loginService: LoginService,
    // private store: Store<fromRoot.State>,
    private fb: FormBuilder) {

  }

  /**
   * 화면 초기실행
   * 폼 그룹 설정
   * 사용자가 선택한 언어가 없는 경우 한국어로 언어 설정 후 번역
   */
  ngOnInit() {

    this.userform = this.fb.group({
      'userId': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });

    // 언어설정
    if (!this.mainMenu.getLanguage()) {
      this.mainMenu.setLanguage('ko');
    }
    this.translate.setDefaultLang(this.mainMenu.getLanguage());
  }

  /**
   * 로그인
   * ID와 비밀번호를 매개변수로 하여 loginService의 login 메서드 실행
   * 응답이 없거나 서버에서 에러가 나는 경우 에러 메시지 처리
   * 정상적으로 로그인이 되면 서버로 부터 토큰을 받아서 localstorage에 저장.
   * 토큰 정보가 없으면 ID, 비밀번호 확인하라는 경고 메시지 처리
   */
  public login(value: any) {
    this.router.navigate(['layout', { "lang": this.mainMenu.getLanguage() }]);

    // this.loginService.login(value.userId, value.password).then((res: any) => {

    //   if (!res) {
    //     this.translate.get('shared.message').subscribe(msg => {
    //       this.showMessage('error', msg.error, msg.noResponse);
    //     });

    //   } else {
    //     if (res.ok == false) {
    //       this.translate.get('shared.message').subscribe(msg => {
    //         this.showMessage('error', msg.error + ' / ' + res.status, res.error.message);
    //       });

    //     } else {
    //       if (res.authToken) {
    //         localStorage.setItem('AuthToken', res.authToken);

    //         // this.store.dispatch(new ApplicationActions.LogIn());
    //         this.router.navigate(['layout', { "lang": this.mainMenu.getLanguage() }]);

    //       } else {
    //         this.translate.get('shared.message').subscribe(msg => {
    //           this.showMessage('warn', msg.warn, msg.loginFail);
    //         });

    //       }
    //     }
    //   }
    // });
  }

  /**
   * 사용자가 설정한 언어로 설정을 변경하고 번역한다.
   * @param language : 언어
   */
  public useLanguage(language: string) {
    this.mainMenu.setLanguage(language);
    this.translate.use(language);
  }

  /**
   * 메시지 출력하는 메서드 
   * @param severity: 메시지 종류 
   * @param summary: 메시지 헤더
   * @param detail: 메시지 상세내역
   */
  // private showMessage(severity: string, summary: string, detail: string) {
  //   this.msgs = [];
  //   this.msgs.push({ severity: severity, summary: summary, detail: detail });
  // }

}
