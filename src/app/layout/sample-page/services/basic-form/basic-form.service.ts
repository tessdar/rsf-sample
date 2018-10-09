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
  getDepList(): any {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
          .set('Authorization', localStorage.getItem('AuthToken'))
      };

      this.http.get(environment.restURL + '/api/emp/dep', httpOptions)
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
  getJobList(): any {
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
          .set('Authorization', localStorage.getItem('AuthToken'))
      };

      this.http.get(environment.restURL + '/api/emp/job', httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

  /**
   * 파일 다운로드 하는 웹서비스 호출
   * @param fileName 
   */
  getFileDownload(fileName): Observable<Blob> {
    return this.http.get(environment.restURL + '/api/file/download?file=' + fileName, { responseType: "blob" })
  }

  /**
   * 파일 삭제하는 웹서비스 호출
   * @param fileName 
   */
  delFile(fileName) {
    return new Promise(resolve => {

      this.http.delete(environment.restURL + '/api/file/delete?file=' + fileName)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });
  }

}
