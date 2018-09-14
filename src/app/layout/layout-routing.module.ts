import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'design-guide', loadChildren: './design-guide/design-guide.module#DesignGuideModule' },
      { path: 'sample-page', loadChildren: './sample-page/sample-page.module#SamplePageModule' },
      { path: 'help-advice', loadChildren: './help-advice/help-advice.module#HelpAdviceModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
