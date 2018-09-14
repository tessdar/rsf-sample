import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeactGuard } from '../../shared/guard/deact.guard';

import { BasicCrudComponent } from './components/basic-crud/basic-crud.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ChartFormComponent } from './components/chart-form/chart-form.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'basic-crud', component: BasicCrudComponent, canDeactivate: [DeactGuard] },
    { path: 'basic-form', component: BasicFormComponent },
    { path: 'chart-form', component: ChartFormComponent } 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePageRoutingModule { }
