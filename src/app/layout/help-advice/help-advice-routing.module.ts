import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchHelpComponent } from '../help-advice/component/arch-help/arch-help.component';
import { NewCompComponent } from '../help-advice/component/new-comp/new-comp.component';
import { DesignLayoutComponent } from '../help-advice/component/design-layout/design-layout.component';
import { NewServComponent } from '../help-advice/component/new-serv/new-serv.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'arch-help', component: ArchHelpComponent },
    { path: 'new-comp', component: NewCompComponent },
    { path: 'design-layout', component: DesignLayoutComponent },
    { path: 'new-serv', component: NewServComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpAdviceRoutingModule { }
