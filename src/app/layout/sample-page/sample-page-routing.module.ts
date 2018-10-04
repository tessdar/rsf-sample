import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactGuard } from '../../shared/guard/deact.guard';

import { BasicCrudComponent } from './components/basic-crud/basic-crud.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ChartFormComponent } from './components/chart-form/chart-form.component';
import { BasicWebcamComponent } from './components/basic-webcam/basic-webcam.component';
import { BarcodeScanComponent } from './components/barcode-scan/barcode-scan.component';
import { SignPadComponent } from './components/sign-pad/sign-pad.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { WebBluetoothComponent } from './components/web-bluetooth/web-bluetooth.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'basic-crud', component: BasicCrudComponent, canDeactivate: [DeactGuard] },
    { path: 'basic-form', component: BasicFormComponent },
    { path: 'chart-form', component: ChartFormComponent },
    { path: 'basic-webcam', component: BasicWebcamComponent },
    { path: 'barcode-scan', component: BarcodeScanComponent },
    { path: 'sign-pad', component: SignPadComponent },
    { path: 'google-maps', component: GoogleMapsComponent },
    { path: 'web-bluetooth', component: WebBluetoothComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule { }
