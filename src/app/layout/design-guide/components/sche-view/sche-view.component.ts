import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-sche-view',
  templateUrl: './sche-view.component.html',
  styleUrls: ['./sche-view.component.scss']
})
export class ScheViewComponent implements OnInit {

  public headerConfig: any;
  public events: any[];

  constructor(public mainMenu: MainMenuService,
    private renderer: Renderer2,
    private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.headerConfig = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };

    this.events = [
      {
        "title": "All Day Event",
        "start": "2018-10-01",
        "color": "#FF6384"
      },
      {
        "title": "Long Event",
        "start": "2018-10-07",
        "end": "2018-10-10",
        "color": "#4BC0C0"
      },
      {
        "title": "Repeating Event",
        "start": "2018-10-09T16:00:00",
        "color": "#FFCE56"
      },
      {
        "title": "Repeating Event",
        "start": "2018-10-16T16:00:00",
        "color": "#FFCE56"
      },
      {
        "title": "Conference",
        "start": "2018-10-11",
        "end": "2018-10-13",
        "color": "#36A2EB"
      }
    ];
    
  }

  ngAfterViewInit() {
    let leftArrow = this.elementRef.nativeElement.querySelector('.ui-icon-circle-triangle-w');
    let rightArrow = this.elementRef.nativeElement.querySelector('.ui-icon-circle-triangle-e');

    this.renderer.removeClass(leftArrow, 'ui-icon');
    this.renderer.removeClass(leftArrow, 'ui-icon-circle-triangle-w');
    this.renderer.addClass(leftArrow,'fas');
    this.renderer.addClass(leftArrow,'fa-caret-left');

    this.renderer.removeClass(rightArrow, 'ui-icon');
    this.renderer.removeClass(rightArrow, 'ui-icon-circle-triangle-e');
    this.renderer.addClass(rightArrow,'fas');
    this.renderer.addClass(rightArrow,'fa-caret-right');
  }

}
