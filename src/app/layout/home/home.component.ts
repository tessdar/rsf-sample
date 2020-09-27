import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public programs: any[];
  public packages: any[];

  constructor() { }

  ngOnInit() {
    this.programs = [
      {
        'name': 'Node',
        'version': '12.18.4'
      },
      {
        'name': 'NPM',
        'version': '6.14.4'
      },
      {
        'name': 'Git',
        'version': '2.17.1'
      },
      {
        'name': 'Angular CLI',
        'version': '10.1.2'
      }
    ];

    this.packages = [
      {
        'name': 'Angular',
        'version': '10.1.2',
        'Description': 'Front-End Core Framework'
      },
      {
        'name': 'rxjs',
        'version': '6.6.3',
        'Description': 'Asynchronous or callback-based code'
      },
      {
        'name': 'PrimeNG',
        'version': '10.0.0',
        'Description': 'Main UI Library'
      },
      {
        'name': 'ngx-translate',
        'version': '10.0.2',
        'Description': 'Angular i18n Library'
      },
      {
        'name': 'fontawesome',
        'version': '0.7.0',
        'Description': 'Icon Library'
      },
      {
        'name': 'chart.js',
        'version': '2.9.3',
        'Description': 'Chart Javascript Library'
      },
      {
        'name': 'fullcalendar',
        'version': '4.4.2',
        'Description': 'Calendar Javascript Library'
      },
      {
        'name': 'quill',
        'version': '1.3.7',
        'Description': 'Editor Library'
      },
      {
        'name': 'file-saver',
        'version': '1.3.8',
        'Description': 'Save File & Blobs'
      },
      {
        'name': 'firebase',
        'version': '7.20.0',
        'Description': 'Push Message'
      }
    ];
  }

}
