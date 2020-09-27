import { Component, OnInit, ViewChild } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
import { FullCalendar } from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-sche-view',
  templateUrl: './sche-view.component.html',
  styleUrls: ['./sche-view.component.scss']
})
export class ScheViewComponent implements OnInit {

  @ViewChild('calendar') private calendar: FullCalendar;

  public options: any;
  public events: any[];

  constructor(
    public mainMenu: MainMenuService
  ) { }

  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    };

    this.events = [
      {
        'title': 'All Day Event',
        'start': '2020-09-01',
        'color': '#FF6384'
      },
      {
        'title': 'Long Event',
        'start': '2020-09-07',
        'end': '2020-09-10',
        'color': '#4BC0C0'
      },
      {
        'title': 'Repeating Event',
        'start': '2020-09-09T16:00:00',
        'color': '#FFCE56'
      },
      {
        'title': 'Repeating Event',
        'start': '2020-09-16T16:00:00',
        'color': '#FFCE56'
      },
      {
        'title': 'Conference',
        'start': '2020-09-11',
        'end': '2020-09-13',
        'color': '#36A2EB'
      }
    ];

  }

}
