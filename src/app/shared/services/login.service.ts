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
  async login(userId: string, password: string): Promise<any> {
    const login = { 'userId': userId, 'password': password };

    const httpOptions = {
      headers: new HttpHeaders()
        .set('Language', this.mainMenu.language)
    };

    return await this.http.post(environment.restURL + '/api/auth/login', login, httpOptions)
      .toPromise()
      .then(data => data)
      .catch(err => err);
  }

}
