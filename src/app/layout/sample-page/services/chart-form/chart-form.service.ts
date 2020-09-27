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
  async getDepChart(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
        .set('Authorization', localStorage.getItem('AuthToken'))
    };

    return await this.http.get(environment.restURL + '/api/emp/depChart', httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

  /**
   * 업무정보 조회하는 웹서비스 호출
   */
  async getJobChart(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
        .set('Authorization', localStorage.getItem('AuthToken'))
    };

    return await this.http.get(environment.restURL + '/api/emp/jobChart', httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

}
