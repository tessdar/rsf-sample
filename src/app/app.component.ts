import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

// import { ConnectionService } from 'ng-connection-service';
import { MainMenuService } from './shared/services/main-menu.service';

import { SwUpdate } from '@angular/service-worker';
// import { interval } from 'rxjs';
import { afMessage } from './shared/interfaces/af-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  constructor(
    public mainMenu: MainMenuService,
    private messageService: MessageService,
    private afMessaging: AngularFireMessaging,
    private translate: TranslateService,
    // private connectionService: ConnectionService,
    private swUpdate: SwUpdate
  ) {

    /**
     * 네트워크 접속 상태 확인
     */
    // this.connectionService.monitor().subscribe(isConnected => {
    //   this.mainMenu.setIsConnected(isConnected);
    //   if (isConnected) {
    //     this.translate.get('shared.message').subscribe(msg => {
    //       this.messageService.add({ key: 'connect', severity: 'info', summary: msg.info, detail: msg.onLine });
    //     });
    //   }
    //   else {
    //     this.translate.get('shared.message').subscribe(msg => {
    //       this.messageService.add({ key: 'connect', severity: 'warn', summary: msg.warn, detail: msg.offLine });
    //     });
    //   }
    // })

    /** 
     * 신규 버전 업데이트 체크
     * 아래 3가지 중 하나를 택하고 나머지는 주석처리
     * 1. 주기적으로 서버에 업데이트 체크하는 방법
     * 2. 업데이트를 사용자에게 알려주는 방법 (사용자가 직접 Refresh 해 주어야 함.) 
     * 3. 업데이트 발견 시 바로 업데이트 하는 방법 
     */
    if (this.swUpdate.isEnabled) {

      // 1. 주기적으로 업데이트 체크하는 방법
      // interval(3600 * 1000).subscribe(() => this.swUpdate.checkForUpdate().then(() => {
      //   console.log('[App] checkForUpdate');
      // }).catch(() => {
      //   this.translate.get('shared.message').subscribe(msg => {
      //     this.messageService.add({ key: 'upnoti', severity: 'error', summary: msg.error, detail: msg.errApp });
      //   });
      // }));

      // 2. 업데이트 발생 시 사용자에게 알림 
      this.swUpdate.available.subscribe(evt => {
        console.log('[App] Update available: current version is', evt.current, 'available version is', evt.available);

        this.translate.get('shared.message').subscribe(msg => {
          this.messageService.add({ key: 'upnoti', severity: 'info', summary: msg.info, detail: msg.newApp });
        });
      });

      // 3. 업데이트 발견 시 바로 업데이트 
      // this.swUpdate.available.subscribe(() => {        
      //   this.swUpdate.activateUpdate().then(() => {
      //     window.location.reload(true) }
      //   ).catch(() => {
      //     this.translate.get('shared.message').subscribe(msg => {
      //       this.messageService.add({ key: 'upnoti', severity: 'error', summary: msg.error, detail: msg.errApp });
      //     });
      //   });        
      // });
    }

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