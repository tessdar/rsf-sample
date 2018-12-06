import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
import { PushCarouselService } from '../../services/push-carousel/push-carousel.service';
import { Observable, timer } from 'rxjs';

import { PushType, Noti, Data }  from '../../interfaces/push-carousel/push-data';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-push-carousel',
  templateUrl: './push-carousel.component.html',
  styleUrls: ['./push-carousel.component.scss'],
  providers: [PushCarouselService, MessageService]
})
export class PushCarouselComponent implements OnInit {

  items: Observable<any[]>;
  imgUrl: Observable<string | null>;

  callLists: MenuItem[];

  displayDialog = false as boolean;
  displayCall = false as boolean;

  callStation: string;
  callType: string;

  faCheck = faCheck;

  constructor(public mainMenu: MainMenuService,
    public afdb: AngularFireDatabase,
    private afstorage: AngularFireStorage,
    private translate: TranslateService,
    private pushCarouselService: PushCarouselService,
    private messageService: MessageService
  ) {

    this.items = afdb.list('rsm/plant/swi').valueChanges();

    this.items.subscribe(data => {
      if (data[data.length - 1].qualChk == 'Y') {
        this.displayDialog = true;
        const ref = this.afstorage.ref('rsm/plant/swi/' + data[data.length - 1].qualFile);
        this.imgUrl = ref.getDownloadURL();
      }
    });

  }

  ngOnInit() {

    this.callLists = [
      { label: '작업확인 품질확인 요청', icon: 'pi pi-fw pi-question', command: (event) => { this.callEmerg(1) } },
      { label: '부품부족 부품사양 확인', icon: 'pi pi-fw pi-check', command: (event) => { this.callEmerg(2) } },
      { label: '설비이상 확인 및 보전 요청', icon: 'pi pi-fw pi-cog', command: (event) => { this.callEmerg(3) } },
      { label: '대체인력 요청 (자리 비움)', icon: 'pi pi-fw pi-refresh', command: (event) => { this.callEmerg(4) } },
      { label: '기타 라인 리더 호출', icon: 'pi pi-fw pi-star', command: (event) => { this.callEmerg(5) } }
    ];

  }

  public dialogOk() {
    this.displayDialog = false;
  }

  public dialogCallOk() {
    this.displayCall = false;
  }

  public callEmerg(type: number) {

    let callData = {} as PushType;
    let ids = [] as string[];
    let notify = {} as Noti;
    let sendData = {} as Data;
    let lastItems: Observable<any[]>;

    lastItems = this.afdb.list('rsm/plant/swi', ref => ref.limitToLast(1)).valueChanges();
    lastItems.subscribe(data => {
      sendData.trimNo = data[0].trimNo;
      sendData.model = data[0].model;
      sendData.diverLoc = data[0].diverLoc;
      sendData.destination = data[0].destination;
      sendData.swBzr = data[0].swBzr;
      sendData.rrack = data[0].rrack;
      sendData.qualChk = data[0].qualChk;
      sendData.qualFile = data[0].qualFile;
      sendData.carColor = data[0].carColor;
      callData.data = sendData;

      ids.push('eYkYAcBUWDQ:APA91bFtN1dsRd3AcqJ_LC2iTZryF-XjLe-bX3hetUiYaSRDI8KulNotmPt9wmPub5OgBdn1ciNqi8nL8crFOiOeZXDquxSugn2jDeYhDBhlo524-SIaQ9gQ7NFlga5uKtoLvXv8MgQM');
      ids.push('e0bBc4O1jW4:APA91bHcFH48824ScO1bBh6MzXtEPicMyA500I1cElafXxnEAeqPcL3Bh75k6HFr5uhkbaeMCb67a-OXkpou1iqte5Pc-029-BBvhM4DOZnXoTHCbemxpgxwVNr1X1jG-8nH_mMBY-tp');
  
      callData.registration_ids = ids;
  
      this.callStation = 'RH-02';
      switch (type) {
        case 1: {
          this.callType = '작업확인';
          break;
        }
        case 2: {
          this.callType = '부품부족';
          break;
        }
        case 3: {
          this.callType = '설비이상';
          break;
        }
        case 4: {
          this.callType = '대체인력';
          break;
        }
        case 5: {
          this.callType = '기타';
          break;
        }
      }
  
      notify.title = this.callStation;;
      notify.body = this.callType;
  
      callData.notification = notify;

      this.translate.get('shared.message').subscribe(msg => {

        this.pushCarouselService.callEmerg(callData).then((res: any) => {
          if (!res) {
            this.messageService.add({ severity: 'error', summary: msg.error, detail: msg.noResponse });

          } else {
            if (res.ok == false) {
              this.messageService.add({ severity: 'error', summary: msg.error + ' / ' + res.status, detail: res.error.message });

            } else {
              this.displayCall = true;

              this.pushCarouselService.saveCallLog(callData.data);

              timer(3000).subscribe(val => {
                if (val == 0) {
                  this.displayCall = false;
                }
              });
            }
          }
        });
      });
    });
  }
}