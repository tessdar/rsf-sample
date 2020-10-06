import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/api';
import { MenuList } from '../../shared/interfaces/menu-list';

@Injectable({
  providedIn: 'root',
})
export class MainMenuService {
  public language: string;
  public isConnected: boolean;

  public menuItems: MenuItem[];
  public menuActive: boolean;
  public menuInactive: boolean;

  public breadItems = [] as MenuItem[];
  public breadKeys: any[];

  constructor(public http: HttpClient) { }

  /**
   * Breadmenu Key 설정하는 메서드
   * @param key : Breadmenu 설정 Key
   * @param menuLang : 언어
   */
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
        if (ele1.key === ele2) {
          this.breadItems.push(
            { label: menuLang[ele2] }
          );
        }
      });
    });
  }

  /**
   * sankeToCamel 변환
   * @param str : 입력문자
   */
  private snakeToCamel(str: string): string {
    return str.replace(
      /([-_][a-z])/g,
      (group) => group.toUpperCase()
        .replace('-', '')
        .replace('_', ''));
  }

  /**
   * 메뉴 커멘드 설정
   * @param routerLink : 라우터 경로
   * @param menuLang : 언어
   */
  private setMenuCommand(routerLink: string, menuLang): any {
    if (!(typeof routerLink === 'undefined' || routerLink === null || routerLink === '')) {
      return (event) => {
        this.menuActive = !this.menuActive;

        const words =
          this.snakeToCamel(event.item.routerLink.replace('/layout/', '')).split('/');
        this.breadKeys = [];
        words.forEach((item) => {
          this.breadKeys.push({ 'key': item });
        });
        this.setBreadItems(menuLang);
      };
    }
  }

  /**
   * 하위 메뉴 설정하는 함수
   * @param menuItem : 메뉴 아이템
   * @param data : 메뉴 리스트
   * @param menuLang : 언어
   */
  private menuLoop(menuItem: MenuItem[], data: any[], menuLang: string) {
    let menuitem: MenuItem = {};

    if (menuItem.length < 1) { return; }
    if (data.length < 1) { return; }

    menuItem.forEach((ele1, idx1) => {
      menuItem[idx1].items = [];

      data.forEach((ele2) => {
        if (ele1.id === ele2.upperLv) {
          menuitem.id = ele2.level;
          menuitem.label = menuLang[ele2.label];
          menuitem.routerLink = ele2.routerLink;
          menuitem.command = this.setMenuCommand(ele2.routerLink, menuLang);
          menuItem[idx1].items.push(menuitem);
          menuitem = {};
        }
      });
      if (menuItem[idx1].items.length < 1) { menuItem[idx1].items = null; return; }

      this.menuLoop(menuItem[idx1].items, data, menuLang);
    });
  }

  /**
   * 메뉴리스트 가져오는 메서드
   * @param menuLang : 언어
   */
  public getMenuList(menuLang): any {
    this.http.get<MenuList[]>('assets/data/menu.json').toPromise()
      .then((data: any) => {
        let menuitem: MenuItem = {};
        this.menuItems = [];

        data.forEach((element) => {
          if (element.upperLv === 0) {
            menuitem.id = element.level;
            menuitem.label = menuLang[element.label];
            this.menuItems.push(menuitem);
            menuitem = {};
          }
        });
        this.menuLoop(this.menuItems, data, menuLang);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
