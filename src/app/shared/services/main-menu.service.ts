import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MainMenuService {
  private language: string;
  private isConnected: boolean;

  private menuItems: MenuItem[];
  private menuActive: boolean;
  private menuInactive: boolean;

  public breadItems = [] as MenuItem[];
  public prevBreadItems = [] as MenuItem[];

  constructor(public http: HttpClient) { }

  /**
   * 메인 메뉴 설정
   * label: 메뉴이름
   * items: 하위 메뉴
   * routerLink: 메뉴클릭시 이동할 페이지 경로
   * command: - menuActive 변수가 true 이면 false로 false이면 true로 변경
   *            모바일환경에서 메뉴버튼 클릭 시 자동으로 메뉴가 닫히도록 하기 위함
   *          - 우측 메뉴경로 설정
   */
  public setMenuItems() {
    this.getMenu(this.getLanguage()).then((res: MenuItem[]) => {

      res.forEach((ele1: MenuItem) => {
        for (let i = 0; i < ele1.items.length; i++) {

          let ele2 = ele1.items[i] as MenuItem;

          ele2.command = (event) => {
            this.menuActive = !this.menuActive;

            if (this.breadItems.length > 0) {
              this.prevBreadItems = this.breadItems;
            }
            this.breadItems = [];
            this.breadItems.push({ "label": ele1.label });
            this.breadItems.push({ "label": ele2.label, "routerLink": ele2.routerLink });

          };

          // BreadComb Menu 설정
          if (this.breadItems.length > 0) {
            for (let j = 0; j < this.breadItems.length; j++) {
              if (this.breadItems[j].routerLink == ele2.routerLink) {
                this.breadItems = [];
                this.breadItems.push({ "label": ele1.label });
                this.breadItems.push({ "label": ele2.label, "routerLink": ele2.routerLink });
              }
            }
          }

        }
      });

      this.menuItems = res;
    });
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

  public setBreadItems(breadItems: MenuItem[]) {
    this.breadItems = breadItems;
  }

  public getPrevBreadItems() {
    this.breadItems = this.prevBreadItems;
  }

  public getIsConnected(): boolean {
    return this.isConnected;
  }

  public setIsConnected(isConnected: boolean) {
    this.isConnected = isConnected;
  }

  public getMenu(lang: string) {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', lang)
      };

      this.http.get('/assets/data/main-menu-' + lang + '.json', httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });
  }

}
