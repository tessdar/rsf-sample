import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Injectable({
  providedIn: 'root',
})
export class BasicCrudService {

  constructor(public http: HttpClient,
    public mainMenu: MainMenuService) { }

  /**
   * 사원정보 조회하는 웹서비스 호출
   * @param departmentId : 부서코드
   */
  getEmpList(departmentId: string): any {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
          .set('Authorization', localStorage.getItem('AuthToken')),
        params: new HttpParams()
          .set('departmentId', departmentId)
      };

      this.http.get(environment.restURL + '/api/emp/list', httpOptions)              
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

  /**
   * 사원정보 저장하는 웹서비스 호출
   * @param saveList : 저장 리스트
   */
  setEmp(saveList: any[]): any {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
          .set('Authorization', localStorage.getItem('AuthToken'))
      };

      this.http.post(environment.restURL + '/api/emp/save', saveList, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

}
