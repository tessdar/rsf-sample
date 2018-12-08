import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Translate
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Rounting
import { SamplePageRoutingModule } from './sample-page-routing.module';

// Ui Module
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Cam/barcode/signpad/Bluetooth Module
import { WebcamModule } from 'ngx-webcam';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AgmCoreModule } from '@agm/core';
import { WebBluetoothModule } from '@manekinekko/angular-web-bluetooth';

// Pipes
import { DesendSortPipe } from '../../shared/pipes/desend-sort.pipe';

// Components
import { BasicCrudComponent } from './components/basic-crud/basic-crud.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ChartFormComponent } from './components/chart-form/chart-form.component';
import { BasicWebcamComponent } from './components/basic-webcam/basic-webcam.component';
import { BarcodeScanComponent } from './components/barcode-scan/barcode-scan.component';
import { SignPadComponent } from './components/sign-pad/sign-pad.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { WebBluetoothComponent } from './components/web-bluetooth/web-bluetooth.component';
import { PushCarouselComponent } from './components/push-carousel/push-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SamplePageRoutingModule,
    TranslateModule,
    ButtonModule,
    ToolbarModule,
    PanelModule,
    TableModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    FileUploadModule,
    OverlayPanelModule,
    CarouselModule,
    MenuModule,
    FontAwesomeModule,
    WebcamModule,
    ZXingScannerModule,
    SignaturePadModule,
    WebBluetoothModule.forRoot({
      enableTracing: true
    }),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCMWpGdAGHDpo-H03AI4tIQ-mPV38ZPJn8'
    })
  ],
  declarations: [
    DesendSortPipe,
    BasicCrudComponent,
    BasicFormComponent,
    ChartFormComponent,
    BasicWebcamComponent,
    BarcodeScanComponent,
    SignPadComponent,
    GoogleMapsComponent,
    WebBluetoothComponent,
    PushCarouselComponent
  ],
  exports: [TranslatePipe],
  providers: [TranslateModule]
})
export class SamplePageModule { }