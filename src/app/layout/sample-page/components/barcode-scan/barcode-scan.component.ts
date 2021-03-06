import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('scanner', { static: true })
  scanner: ZXingScannerComponent;

  public hasDevices: boolean;
  public hasPermission: boolean;
  public qrResultString: string;
  private qrResult: Result;
  public currentDevice: MediaDeviceInfo;

  public deviceLists = [] as SelectItem[];

  constructor(
    public mainMenu: MainMenuService
  ) {
    this.currentDevice = null;
  }

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
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);

  }

  handleQrCodeResult(resultString: string) {
    const snd = new Audio();
    snd.src = '../../../../../assets/audio/beep.mp3';
    snd.load();
    snd.play();
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(event: any) {
    // this.currentDevice = this.scanner.getDeviceById(event.value);
  }

}
