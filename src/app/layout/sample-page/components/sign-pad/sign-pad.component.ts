import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
import { saveAs } from 'file-saver/FileSaver';

import { MessageService } from 'primeng/api';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-sign-pad',
  templateUrl: './sign-pad.component.html',
  styleUrls: ['./sign-pad.component.scss'],
  providers: [MessageService]
})
export class SignPadComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  public signImage: string;

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 300,
    'canvasHeight': 200,
    'backgroundColor': "#FAFAD2"
  };

  constructor(
    public mainMenu: MainMenuService,
    private translate: TranslateService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  public drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.signImage = this.signaturePad.toDataURL();
    console.log('end drawing');
  }

  public drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  public drawClear() {
    this.signaturePad.clear();
    this.signImage = this.signaturePad.toDataURL();
    console.log('clear drawing');
  }

  public drawSave() {
    if (this.signaturePad.isEmpty()) {
      this.translate.get('shared.message').subscribe(msg => {
        this.messageService.add({ severity: 'warn', summary: msg.warn, detail: msg.noSaveData });        
      });

    } else {      
      const imageBlob = this.dataURItoBlob(this.signImage.substring(22));
      saveAs(imageBlob, 'sign.png');      
    }
  }

  private dataURItoBlob(dataURI) {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: 'image/png' });
    return blob;
  }

}
