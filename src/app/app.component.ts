import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

import { ConnectionService } from 'ng-connection-service';
import { MainMenuService } from './shared/services/main-menu.service';

import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  constructor(
    public mainMenu: MainMenuService,
    public messageService: MessageService,
    private afMessaging: AngularFireMessaging,
    private translate: TranslateService,
    private connectionService: ConnectionService,
    private swUpdate: SwUpdate
  ) {

    /**
     * 네트워크 접속 상태 확인
     */
    this.connectionService.monitor().subscribe(isConnected => {
      this.mainMenu.setIsConnected(isConnected);
      if (isConnected) {
        this.translate.get('shared.message').subscribe(msg => {
          this.messageService.add({ key: 'connect', severity: 'info', summary: msg.info, detail: msg.onLine });
        });
      }
      else {
        this.translate.get('shared.message').subscribe(msg => {
          this.messageService.add({ key: 'connect', severity: 'warn', summary: msg.warn, detail: msg.offLine });
        });
      }
    })

    // 신규 버전 업데이트 체크
    this.swUpdate.available.subscribe(event => {
      console.log('[App] Update available: current version is', event.current, 'available version is', event.available );

      let newVersion: string = event.available.toString();

      this.translate.get('shared.message').subscribe(msg => {
        this.messageService.add({ key: 'upnoti', severity: 'info', summary: newVersion, detail: msg.NewApp });
      });
    });

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
        this.messageService.add({ key: 'connect', severity: 'info', summary: message.notification.title, detail: message.notification.body });
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
