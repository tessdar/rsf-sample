import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-sche-view',
  templateUrl: './sche-view.component.html',
  styleUrls: ['./sche-view.component.scss']
})
export class ScheViewComponent implements OnInit {

  public headerConfig: any;
  public events: any[];

  constructor(public mainMenu: MainMenuService) { }

  ngOnInit() {
    this.headerConfig = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		};

    this.events = [
      {
        "title": "All Day Event",
        "start": "2018-04-01",
        "color": "#FF6384"
      },
      {
        "title": "Long Event",
        "start": "2018-04-07",
        "end": "2018-04-10",
        "color": "#4BC0C0"
      },
      {
        "title": "Repeating Event",
        "start": "2018-04-09T16:00:00",
        "color": "#FFCE56"
      },
      {
        "title": "Repeating Event",
        "start": "2018-04-16T16:00:00",
        "color": "#FFCE56"
      },
      {
        "title": "Conference",
        "start": "2018-04-11",
        "end": "2018-04-13",
        "color": "#36A2EB"
      }
    ];
  }

}
