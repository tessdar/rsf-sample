import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-new-serv',
  templateUrl: './new-serv.component.html',
  styleUrls: ['./new-serv.component.scss']
})
export class NewServComponent implements OnInit {

  constructor(public mainMenu: MainMenuService) { }

  ngOnInit() { }

}
