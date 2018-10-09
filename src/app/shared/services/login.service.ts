import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { MainMenuService } from '../../shared/services/main-menu.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(public http: HttpClient,
    public mainMenu: MainMenuService) { }

  /**
   * 로그인 웹서비스 호출하는 메서드
   * @param userId: 사용자 ID
   * @param password: 비밀번호
   */
  login(userId: string, password: string): any {
    let login = { "userId": userId, "password": password };

    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Language', this.mainMenu.getLanguage())
      };

      this.http.post(environment.restURL + '/api/auth/login', login, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

}
