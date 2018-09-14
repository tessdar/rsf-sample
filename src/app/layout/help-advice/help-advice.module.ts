import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpAdviceRoutingModule } from './help-advice-routing.module';

// Translate
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// UI modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TreeTableModule } from 'primeng/treetable';
import { PanelModule } from 'primeng/panel';

// Component
import { ArchHelpComponent } from './component/arch-help/arch-help.component';
import { NewCompComponent } from './component/new-comp/new-comp.component';
import { DesignLayoutComponent } from './component/design-layout/design-layout.component';
import { NewServComponent } from './component/new-serv/new-serv.component';

@NgModule({
  imports: [
    CommonModule,
    HelpAdviceRoutingModule,
    TranslateModule,
    BreadcrumbModule,
    TreeTableModule,
    PanelModule
  ],
  declarations: [ArchHelpComponent, NewCompComponent, DesignLayoutComponent, NewServComponent],
  exports: [TranslatePipe],
  providers: [TranslateModule]
})
export class HelpAdviceModule { }
