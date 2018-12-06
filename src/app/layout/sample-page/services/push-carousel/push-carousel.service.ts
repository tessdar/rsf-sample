import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushCarouselService {
  
  constructor(
    public http: HttpClient
    ) { }

  callEmerg(callData: any): any {
    
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Content-Type','application/json')
          .set('Authorization', 'key=AAAAhp3z7Co:APA91bHzwMP0_cx0qTcFlAUD9kN7xtTufNk_IG5QV7P9_BIJh7n9Qbg3p5rVk5G0ECbHUbRzTiJxSDSiyNGdeUzMKX_Vo6C5OBguvjAMpctFRBjSBZnf17caTlC4jKRszcOyofMc9swW5ZUIEAbhqf2Cg5iKH479VA')
      };

      this.http.post('https://fcm.googleapis.com/fcm/send', callData, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });

  }

  saveCallLog(logData: any): any {
    
    return new Promise(resolve => {
      const httpOptions = {
        headers: new HttpHeaders()
          .set('Content-Type','application/json')
      };

      this.http.post('https://asftest-3d5e2.firebaseio.com/rsm/plant/call.json', logData, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
          resolve(err);
        });
    });
    
  }

}
