import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-design-layout',
  templateUrl: './design-layout.component.html',
  styleUrls: ['./design-layout.component.scss']
})
export class DesignLayoutComponent implements OnInit {

  constructor(public mainMenu: MainMenuService) { }

  ngOnInit() {
  }

}
