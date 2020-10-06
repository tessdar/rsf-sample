import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn-lib',
  templateUrl: './btn-lib.component.html',
  styleUrls: ['./btn-lib.component.scss']
})
export class BtnLibComponent implements OnInit {

  public types: SelectItem[];
  public selectedType: string;
  public items: MenuItem[];

  public uploadedFiles: any[] = [];

  public faAngleRight = faAngleRight;

  constructor(
    public mainMenu: MainMenuService
  ) { }

  /**
   * 화면 초기설정
   * Select button 초기값 설정
   */
  ngOnInit() {
    this.types = [
      { label: 'Lorem 1', value: '1' },
      { label: 'Lorem 2', value: '2' },
      { label: 'Lorem 3', value: '3' }
    ];

    this.items = [
      {
        label: 'Update', command: () => {
          // this.update();
        }
      },
      {
        label: 'Delete', command: () => {
          // this.delete();
        }
      },
      { label: 'Angular.io', url: 'http://angular.io' }
    ];

  }

  onUpload(event) { }

}
