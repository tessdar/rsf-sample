import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/components/common/api';

import { ConnectionService } from 'ng-connection-service';
import { MainMenuService } from './shared/services/main-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public msgs: Message[] = []; // i18n 텍스트 변환 변수

  constructor(
    private afMessaging: AngularFireMessaging,
    private translate: TranslateService,
    public mainMenu: MainMenuService,
    private connectionService: ConnectionService
  ) {

    /**
     * 네트워크 접속 상태 확인
     */
    this.connectionService.monitor().subscribe(isConnected => {
      this.mainMenu.setIsConnected(isConnected);
      if (isConnected) {
        this.translate.get('shared.message').subscribe(msg => {
          this.msgs = this.mainMenu.showMessage('info', msg.info, msg.onLine);
        });
      }
      else {
        this.translate.get('shared.message').subscribe(msg => {
          this.msgs = this.mainMenu.showMessage('error', msg.error, msg.offLine);
        });
      }
    })

  }

  ngOnInit() {
    this.requestPermission();
    this.listen();
  }

  /**
   * Firebase 메시지 수신 허가 받는 메서드
   * 토큰은 사용자 ID와 매칭하여 Backend DB에 보관해야 함.
   */
  public requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

  /**
   * Firebase 메시지 수신 받는 메서드
   */
  public listen() {
    this.afMessaging.messages
      .subscribe((message: afMessage) => {        
        this.msgs = this.mainMenu.showMessage('info', message.notification.title, message.notification.body);
      });
  }

}

interface afMessage {
  collapse_key?: string
  from?: string
  notification: {
    title: string,
    body: string,
    click_action?: string
  }
}
