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
import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { OverlayPanelModule } from 'primeng/overlaypanel';

// Components
import { BasicCrudComponent } from './components/basic-crud/basic-crud.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { ChartFormComponent } from './components/chart-form/chart-form.component';

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
    GrowlModule,
    ConfirmDialogModule,
    BreadcrumbModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    FileUploadModule,
    OverlayPanelModule
  ],
  declarations: [
    BasicCrudComponent,
    BasicFormComponent,
    ChartFormComponent
  ],
  exports: [TranslatePipe],
  providers: [TranslateModule]
})
export class SamplePageModule { }