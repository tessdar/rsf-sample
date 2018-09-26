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
      { label: 'Lorem Ipsum 1', value: '1', icon: 'fab fa-facebook' },
      { label: 'Lorem Ipsum 2', value: '2', icon: 'fab fa-google-plus' },
      { label: 'Lorem Ipsum 3', value: '3', icon: 'fab fa-apple' }
    ];

    this.items = [
      {
        label: 'Update', icon: 'fas fa-sync-alt', command: () => {
          // this.update();
        }
      },
      {
        label: 'Delete', icon: 'fas fa-times-circle', command: () => {
          // this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fas fa-link', url: 'http://angular.io' }
    ];

  }

  onUpload(event) {
 
  }

}
