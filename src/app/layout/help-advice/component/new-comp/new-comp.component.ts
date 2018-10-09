import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.scss']
})
export class NewCompComponent implements OnInit {

  constructor(public mainMenu: MainMenuService) { }

  ngOnInit() { }

}
