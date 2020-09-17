import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'config', component: ConfigComponent },
      { path: 'design-guide', loadChildren: () => import('./design-guide/design-guide.module').then(m => m.DesignGuideModule) },
      { path: 'sample-page', loadChildren: () => import('./sample-page/sample-page.module').then(m => m.SamplePageModule) },
      { path: 'help-advice', loadChildren: () => import('./help-advice/help-advice.module').then(m => m.HelpAdviceModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
