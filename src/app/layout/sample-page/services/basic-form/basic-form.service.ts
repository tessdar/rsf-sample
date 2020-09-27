import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Injectable({
  providedIn: 'root',
})
export class BasicFormService {

  constructor(public http: HttpClient,
    public mainMenu: MainMenuService) { }

  /**
   * 부서정보 조회하는 웹서비스 호출
   */
  async getDepList(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
        .set('Authorization', localStorage.getItem('AuthToken'))
    };

    return await this.http.get(environment.restURL + '/api/emp/dep', httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

  /**
   * 업무정보 조회하는 웹서비스 호출
   */
  async getJobList(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
        .set('Authorization', localStorage.getItem('AuthToken'))
    };

    return await this.http.get(environment.restURL + '/api/emp/job', httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

  /**
   * 파일 다운로드 하는 웹서비스 호출
   * fileName
   */
  getFileDownload(fileName): Observable<Blob> {
    return this.http.get(environment.restURL + '/api/file/download?file=' + fileName, { responseType: 'blob' });
  }

  /**
   * 파일 삭제하는 웹서비스 호출
   * fileName
   */
  async delFile(fileName): Promise<any> {
    return await this.http.delete(environment.restURL + '/api/file/delete?file=' + fileName)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

}
