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
        "name": "Node",
        "version": "8.11.1"
      },
      {
        "name": "NPM",
        "version": "5.6.0"
      },
      {
        "name": "Git",
        "version": "2.15.1"
      },
      {
        "name": "Angular CLI",
        "version": "1.7.3"
      }
    ];

    this.packages = [
      {
        "name": "Angular",
        "version": "5.2.5",
        "Description": "Front-End Core Framework"
      },
      {
        "name": "rxjs",
        "version": "5.5.6",
        "Description": "Asynchronous or callback-based code"
      },
      {
        "name": "PrimeNG",
        "version": "5.2.1",
        "Description": "Main UI Library"
      },
      {
        "name": "ngx-translate",
        "version": "9.1.1",
        "Description": "Angular i18n Library"
      },
      {
        "name": "Font-Awesome",
        "version": "4.7.0",
        "Description": "Icon Library"
      },
      {
        "name": "chart.js",
        "version": "2.7.2",
        "Description": "Chart Javascript Library"
      },
      {
        "name": "fullcalendar",
        "version": "3.9.0",
        "Description": "Calendar Javascript Library"
      },
      {
        "name": "quill",
        "version": "1.3.6",
        "Description": "Editor Library"
      }
    ];
  }

}
