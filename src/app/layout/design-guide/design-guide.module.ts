import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Translate
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Rounting
import { DesignGuideRoutingModule } from './design-guide-routing.module';

// UI modules
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { FileUploadModule } from 'primeng/fileupload';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Pipes
import { SearchFilterPipe } from '../../shared/pipes/search-filter.pipe';

// Components
import { BtnLibComponent } from './components/btn-lib/btn-lib.component';
import { InputLibComponent } from './components/input-lib/input-lib.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { ScheViewComponent } from './components/sche-view/sche-view.component';

@NgModule({
  imports: [
    CommonModule,
    DesignGuideRoutingModule,
    FormsModule,
    TranslateModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    PanelModule,
    CheckboxModule,
    RadioButtonModule,
    PasswordModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    SelectButtonModule,
    BreadcrumbModule,
    AccordionModule,
    EditorModule,
    InputTextareaModule,
    FullCalendarModule,
    FileUploadModule,
    FontAwesomeModule
  ],
  declarations: [
    SearchFilterPipe,
    BtnLibComponent,
    InputLibComponent,
    TabViewComponent,
    ScheViewComponent
  ],
  exports: [TranslatePipe],
  providers: [TranslateModule]
})
export class DesignGuideModule { }
