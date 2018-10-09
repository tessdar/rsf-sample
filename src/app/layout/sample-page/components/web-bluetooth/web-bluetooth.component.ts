import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
// import { TranslateService } from '@ngx-translate/core';
// import { BluetoothCore } from '@manekinekko/angular-web-bluetooth'

@Component({
  selector: 'app-web-bluetooth',
  templateUrl: './web-bluetooth.component.html',
  styleUrls: ['./web-bluetooth.component.scss']
})
export class WebBluetoothComponent implements OnInit {

  constructor(
    public mainMenu: MainMenuService,
    // private translate: TranslateService
    // private bluetoothCore: BluetoothCore
  ) { }

  ngOnInit() {
    // this.bluetoothCore.discover$();
  }

}
