import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

@Component({
  selector: 'app-input-lib',
  templateUrl: './input-lib.component.html',
  styleUrls: ['./input-lib.component.scss']
})
export class InputLibComponent implements OnInit {
  /** 체크박스 */
  public chkbox1: boolean;
  public chkbox2: boolean;
  public chkbox3: boolean;

  /** 라디오박스 */
  public val1: string;

  /** 드랍다운 */
  public items: SelectItem[];
  public selectedItem: SelectItem;

  /** 날짜입력 */
  public date3: Date;

  constructor(public mainMenu: MainMenuService) { }

  /**
   * 화면초기설정
   * 체크박스 체크 설정
   * 라디오체그 초기 설정
   * 드랍다운 초기 설정
   */
  ngOnInit() {
    this.chkbox2 = true;
    this.chkbox3 = true;

    this.val1 = 'Option 2';

    this.items = [
      { label: 'Lorem Ipsum 1', value: '1' },
      { label: 'Lorem Ipsum 2', value: '2' },
      { label: 'Lorem Ipsum 3', value: '3' },
      { label: 'Lorem Ipsum 4', value: '4' },
      { label: 'Lorem Ipsum 5', value: '5' }
    ];
  }

}
