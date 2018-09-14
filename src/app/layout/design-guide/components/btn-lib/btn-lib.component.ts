import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-btn-lib',
  templateUrl: './btn-lib.component.html',
  styleUrls: ['./btn-lib.component.scss']
})
export class BtnLibComponent implements OnInit {

  types: SelectItem[];
  selectedType: string;
  items: MenuItem[];

  uploadedFiles: any[] = [];

  constructor(public mainMenu: MainMenuService) { }

  /**
   * 화면 초기설정
   * Select button 초기값 설정
   */
  ngOnInit() {
    this.types = [
      { label: 'Lorem Ipsum 1', value: '1', icon: 'fa fa-fw fa-facebook-official' },
      { label: 'Lorem Ipsum 2', value: '2', icon: 'fa fa-fw fa-google-plus' },
      { label: 'Lorem Ipsum 3', value: '3', icon: 'fa fa-fw fa-apple' }
    ];

    this.items = [
      {
        label: 'Update', icon: 'fa fa-refresh', command: () => {
          // this.update();
        }
      },
      {
        label: 'Delete', icon: 'fa fa-close', command: () => {
          // this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fa fa-link', url: 'http://angular.io' }
    ];

  }

  onUpload(event) {
 
  }

}
