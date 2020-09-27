import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtnLibComponent } from './components/btn-lib/btn-lib.component';
import { InputLibComponent } from './components/input-lib/input-lib.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { ScheViewComponent } from './components/sche-view/sche-view.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'btn-lib', component: BtnLibComponent },
    { path: 'input-lib', component: InputLibComponent },
    { path: 'tab-view', component: TabViewComponent },
    { path: 'sche-view', component: ScheViewComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignGuideRoutingModule { }
