import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
// import { DataSet, SaveSet } from '../../interfaces/basic-crud/data-set';

import { MainMenuService } from '../../../../shared/services/main-menu.service';
// import { Observable, of } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

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
  // **************************** Observable ******************************
  // public getEmpList(departmentId: string): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders()
  //       .set('Language', this.mainMenu.language)
  //       .set('Authorization', localStorage.getItem('AuthToken')),
  //     params: new HttpParams()
  //       .set('departmentId', departmentId)
  //   };

  //   return this.http.get<DataSet[]>('assets/data/emp.json')
  //     .pipe(
  //       map(res => res),
  //       catchError(error => of({ 'ok': error.ok, 'status': error.status, 'statusText': error.statusText }))
  //     );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   return of([{ 'ok': error.ok, 'status': error.status, 'statusText': error.statusText }]);
  // }
  // *********************************************************************

  // ***************************  Promise ********************************
  async getEmpList(departmentId: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
        .set('Authorization', localStorage.getItem('AuthToken')),
      params: new HttpParams()
        .set('departmentId', departmentId)
    };

    // return await this.http.get('assets/data/emp-list.json')
    return await this.http.get(environment.restURL + '/api/emp/list', httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }
  // *********************************************************************

  /**
   * 사원정보 저장하는 웹서비스 호출
   * @param saveList : 저장 리스트
   */
  async setEmp(saveList: any[]): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
        .set('Authorization', localStorage.getItem('AuthToken'))
    };

    return await this.http.post(environment.restURL + '/api/emp/save', saveList, httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

}
