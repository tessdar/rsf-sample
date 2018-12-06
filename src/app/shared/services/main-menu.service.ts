import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
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
        items: [
          {
            label: menuLang.btnLib,
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
            routerLink: '/layout/design-guide/sche-view',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'designGuide' },
                { 'key': 'scheView' }
              ];
              this.setBreadItems(menuLang);
            }
          }
        ]
      },
      {
        label: menuLang.samplePage,
        items: [
          {
            label: menuLang.basicCrud,
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
            routerLink: '/layout/sample-page/google-maps',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'googleMaps' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.webBluetooth,
            routerLink: '/layout/sample-page/web-bluetooth',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'webBluetooth' }
              ];
              this.setBreadItems(menuLang);
            }
          },
          {
            label: menuLang.pushCarousel,
            routerLink: '/layout/sample-page/push-carousel',
            command: (event) => {
              this.menuActive = !this.menuActive;
              this.breadKeys = [
                { 'key': 'samplePage' },
                { 'key': 'pushCarousel' }
              ];
              this.setBreadItems(menuLang);
            }
          }
        ]
      },
      {
        label: menuLang.helpAdvice,
        items: [
          {
            label: menuLang.archHelp,
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

  public setBreadKeys(key: any[], menuLang) {
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

}
