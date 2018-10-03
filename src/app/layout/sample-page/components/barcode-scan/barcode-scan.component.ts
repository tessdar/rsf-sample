import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-barcode-scan',
  templateUrl: './barcode-scan.component.html',
  styleUrls: ['./barcode-scan.component.scss']
})
export class BarcodeScanComponent implements OnInit {

  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  public currentDevice: MediaDeviceInfo;

  public deviceLists = [] as SelectItem[];

  constructor(
    public mainMenu: MainMenuService
  ) { }

  ngOnInit() {

    // this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
    //   this.hasDevices = true;
    //   this.availableDevices = devices;

    //   // selects the devices's back camera by default
    //   // for (const device of devices) {
    //   //     if (/back|rear|environment/gi.test(device.label)) {
    //   //         this.scanner.changeDevice(device);
    //   //         this.currentDevice = device;
    //   //         break;
    //   //     }
    //   // }
    // });

    // this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    // this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    // this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;

      this.currentDevice = devices[0];

      devices.forEach(element => {
        this.deviceLists.push({ 'label': element.label, 'value': element.deviceId });
      });
      // this.deviceLists.unshift({ 'label': 'No Device Selected', 'value': null });

      // selects the devices's back camera by default
      // for (const device of devices) {
      //     if (/back|rear|environment/gi.test(device.label)) {
      //         this.scanner.changeDevice(device);
      //         this.selectedDevice = device;
      //         break;
      //     }
      // }
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);

  }

  handleQrCodeResult(resultString: string) {
    // console.log('Result: ', resultString);
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(event: any) {
    // console.log('Selection changed: ', event.value);
    this.currentDevice = this.scanner.getDeviceById(event.value);
  }

}
