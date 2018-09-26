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
        "version": "8.12.0"
      },
      {
        "name": "NPM",
        "version": "6.4.1"
      },
      {
        "name": "Git",
        "version": "2.17.1"
      },
      {
        "name": "Angular CLI",
        "version": "6.2.1"
      }
    ];

    this.packages = [
      {
        "name": "Angular",
        "version": "6.1.8",
        "Description": "Front-End Core Framework"
      },
      {
        "name": "rxjs",
        "version": "6.2.0",
        "Description": "Asynchronous or callback-based code"
      },
      {
        "name": "PrimeNG",
        "version": "6.1.4",
        "Description": "Main UI Library"
      },
      {
        "name": "ngx-translate",
        "version": "10.0.2",
        "Description": "Angular i18n Library"
      },
      {
        "name": "fontawesome",
        "version": "5.3.1",
        "Description": "Icon Library"
      },
      {
        "name": "chart.js",
        "version": "2.7.2",
        "Description": "Chart Javascript Library"
      },
      {
        "name": "fullcalendar",
        "version": "4.0.0-alpha",
        "Description": "Calendar Javascript Library"
      },
      {
        "name": "quill",
        "version": "1.3.6",
        "Description": "Editor Library"
      },
      {
        "name": "file-saver",
        "version": "1.3.8",
        "Description": "Save File & Blobs"
      },      
      {
        "name": "firebase",
        "version": "5.5.1",
        "Description": "Push Message"
      }      
    ];
  }

}
