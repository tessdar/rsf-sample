import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Injectable({
  providedIn: 'root',
})
export class ChartFormService {

  constructor(public http: HttpClient,
    public mainMenu: MainMenuService) { }

  /**
   * 부서정보 조회하는 웹서비스 호출
   */
  getDepChart(): any {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
          .set('Authorization', localStorage.getItem('AuthToken'))
      };

      this.http.get(environment.restURL + '/api/emp/depChart', httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

  /**
   * 업무정보 조회하는 웹서비스 호출
   */
  getJobChart(): any {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
          .set('Authorization', localStorage.getItem('AuthToken'))
      };

      this.http.get(environment.restURL + '/api/emp/jobChart', httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

}
