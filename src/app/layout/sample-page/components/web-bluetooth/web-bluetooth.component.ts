import { Component, OnInit, NgZone } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
// import { TranslateService } from '@ngx-translate/core';

import { WebBluetoothService } from '../../services/web-bluetooth/web-bluetooth.service';

@Component({
  selector: 'app-web-bluetooth',
  templateUrl: './web-bluetooth.component.html',
  styleUrls: ['./web-bluetooth.component.scss'],
  providers: [ WebBluetoothService ]
})
export class WebBluetoothComponent implements OnInit {

  batteryLevel: string = '--';
  device: any = {};

  constructor(
    public mainMenu: MainMenuService,
    public _zone: NgZone,
    public _batteryLevelService: WebBluetoothService
    // private translate: TranslateService
  ) { }

  ngOnInit() {
    this.getDeviceStatus();
    this.streamValues();
  }

  streamValues() {
    this._batteryLevelService.streamValues().subscribe(this.showBatteryLevel.bind(this));
  }
  
  getDeviceStatus() {
    this._batteryLevelService.getDevice().subscribe(
      (device) => {        
        if(device) {
          this.device = device;
        }
        else {
          // device not connected or disconnected
          this.device = null;
          this.batteryLevel = '--';
        }
      }
    );
  }

  getFakeValue() {
    this._batteryLevelService.getFakeValue();
  }

  getBatteryLevel() {
    return this._batteryLevelService.getBatteryLevel().subscribe(this.showBatteryLevel.bind(this));
  }

  showBatteryLevel(value: number) {

    // force change detection
    this._zone.run( () =>  {
      console.log('Reading battery level %d', value);
      this.batteryLevel = ''+value;
    });
  }

}
