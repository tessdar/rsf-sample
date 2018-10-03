import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';

@Injectable()
export class MainMenuService {
  private language: string;
  private isConnected: boolean;

  private menuItems: MenuItem[];
  private menuActive: boolean;
  private menuInactive: boolean;

  public breadItems: MenuItem[];
  public breadKeys: any[];

  constructor(private route: ActivatedRoute) { }

  /**
   * 메인 메뉴 설정
   * label: 메뉴이름
   * icon: 메뉴아이콘
   * items: 하위 메뉴
   * routerLink: 메뉴클릭시 이동할 페이지 경로
   * command: - menuActive 변수가 true 이면 false로 false이면 true로 변경
   *            모바일환경에서 메뉴버튼 클릭 시 자동으로 메뉴가 닫히도록 하기 위함
   *          - 우측 메뉴경로 설정
   * @param menuLang : 언어코드
   */
  public setMenuItems(menuLang) {
    this.menuItems = [
      {
        label: menuLang.designGuide,
        icon: 'fas fa-desktop',
        items: [
          {
            label: menuLang.btnLib,
            icon: 'fas fa-hand-point-up',
            routerLink: '/layout/design-guide/btn-lib',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'designGuide' },
                { 'key': 'btnLib' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.inputLib,
            icon: 'fas fa-keyboard',
            routerLink: '/layout/design-guide/input-lib',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'designGuide' },
                { 'key': 'inputLib' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.tabView,
            icon: 'fas fa-file',
            routerLink: '/layout/design-guide/tab-view',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'designGuide' },
                { 'key': 'tabView' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.scheView,
            icon: 'fas fa-calendar-alt',
            routerLink: '/layout/design-guide/sche-view',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'designGuide' },
                { 'key': 'scheView' }
              ];
              this.setBreadItems(menuLang);
            }
          },          
          {
            label: menuLang.iconLib,
            icon: 'fab fa-bandcamp',
            routerLink: '/layout/design-guide/icon-lib',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'designGuide' },
                { 'key': 'iconLib' }
              ];
              this.setBreadItems(menuLang);
            }
          }]
      },
      {
        label: menuLang.samplePage,
        icon: 'fas fa-columns',
        items: [
          {
            label: menuLang.basicCrud,
            icon: 'fas fa-edit',
            routerLink: '/layout/sample-page/basic-crud',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'basicCrud' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.basicForm,
            icon: 'fas fa-window-maximize',
            routerLink: '/layout/sample-page/basic-form',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'basicForm' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.chartForm,
            icon: 'fas fa-chart-bar',
            routerLink: '/layout/sample-page/chart-form',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'chartForm' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.basicWebcam,
            icon: 'fas fa-camera',
            routerLink: '/layout/sample-page/basic-webcam',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'basicWebcam' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.barcodeScan,
            icon: 'fas fa-barcode',
            routerLink: '/layout/sample-page/barcode-scan',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'barcodeScan' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.signPad,
            icon: 'fas fa-signature',
            routerLink: '/layout/sample-page/sign-pad',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'signPad' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.googleMaps,
            icon: 'fas fa-map',
            routerLink: '/layout/sample-page/google-maps',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'googleMaps' }
              ];
              this.setBreadItems(menuLang);
            }
          }             
        ]
      },
      {
        label: menuLang.helpAdvice,
        icon: 'fas fa-question',
        items: [
          {
            label: menuLang.archHelp,
            icon: 'fas fa-building',
            routerLink: '/layout/help-advice/arch-help',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'helpAdvice' },
                { 'key': 'archHelp' }
              ];
              this.setBreadItems(menuLang);    
            }        
          },
          {
            label: menuLang.newComp,
            icon: 'fas fa-plus-square',
            routerLink: '/layout/help-advice/new-comp',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'helpAdvice' },
                { 'key': 'newComp' }
              ];
              this.setBreadItems(menuLang);    
            }        
          },
          {
            label: menuLang.newServ,
            icon: 'fas fa-server',
            routerLink: '/layout/help-advice/new-serv',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'helpAdvice' },
                { 'key': 'newServ' }
              ];
              this.setBreadItems(menuLang);    
            }        
          },          
          {
            label: menuLang.designLayout,
            icon: 'fas fa-image',
            routerLink: '/layout/help-advice/design-layout',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'helpAdvice' },
                { 'key': 'designLayout' }
              ];
              this.setBreadItems(menuLang);    
            }        
          }          
        ]
      }
    ];
  }

  public getLanguage(): string {
    return this.language;
  }

  public setLanguage(language: string) {
    this.language = language;
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  public getMenuActive(): boolean {
    return this.menuActive;
  }

  public setMenuActive(menuActive: boolean) {
    this.menuActive = menuActive;
  }

  public getMenuInactive(): boolean {
    return this.menuInactive;
  }

  public setMenuInactive(menuInactive: boolean) {
    this.menuInactive = menuInactive;
  }

  public getBreadItems(): MenuItem[] {
    return this.breadItems;
  }

  public setBreadKeys(key: any[], menuLang ) {
    this.breadKeys = key;
    this.setBreadItems(menuLang);
  }

  /**
   * 메뉴경로 설정
   * 메뉴경로 값이 존재하지 않는 경우 리턴
   * 설정된 메뉴 경로값을 primeNg에서 지정한 메뉴 인터페이스로 변환
   * @param menuLang : 언어코드
   */
  public setBreadItems(menuLang) {
    this.breadItems = [];

    if (!this.breadKeys) {
      return;
    }

    this.breadKeys.forEach(ele1 => {
      Object.keys(menuLang).forEach(ele2 => {
        if (ele1.key == ele2) {
          this.breadItems.push(
            { label: menuLang[ele2] }
          )
        }
      });
    });

  }

  public getIsConnected(): boolean {
    return this.isConnected;
  }

  public setIsConnected(isConnected: boolean) {
    this.isConnected = isConnected;
  }

  /**
   * 메시지 출력하는 메서드 
   * @param severity: 메시지 종류 
   * @param summary: 메시지 헤더
   * @param detail: 메시지 상세내역
   */
  public showMessage(severity: string, summary: string, detail: string): Message[] {
    let msgs = [] as Message[];
    msgs.push({ severity: severity, summary: summary, detail: detail });
    return msgs;
  }

}
