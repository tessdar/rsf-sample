import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

// Rounting
import { LayoutRoutingModule } from './layout-routing.module';

// UI modules
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';

// Pages
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from './home/home.component';

// Providers
import { MainMenuService } from '../shared/services/main-menu.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    PanelMenuModule,
    ButtonModule,
    DialogModule,
    SidebarModule,
    DataViewModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent
  ],
  providers: [
    MainMenuService
  ]
})
export class LayoutModule { }
