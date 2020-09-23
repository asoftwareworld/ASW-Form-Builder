import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderComponent } from './layout/form-builder/form-builder.component';
import { ButtonComponent } from './layout/form-builder/controls/button/button.component';
import { TextboxComponent } from './layout/form-builder/controls/text-box/text-box.component';
import { TextAreaComponent } from './layout/form-builder/controls/text-area/text-area.component';
import { SelectComponent } from './layout/form-builder/controls/select/select.component';
import { MultiSelectComponent } from './layout/form-builder/controls/multi-select/multi-select.component';
import { RadioButtonComponent } from './layout/form-builder/controls/radio-button/radio-button.component';
import { DatepickerComponent } from './layout/form-builder/controls/datepicker/datepicker.component';
import { ComponentsModule } from './layout/shared-components/components/components.module';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './layout/shared-components/confirm-dialog/confirm-dialog.component';
import { EditTextboxComponent } from './layout/edit-controls/edit-text-box/edit-text-box.component';
import { EditTextAreaComponent } from './layout/edit-controls/edit-text-area/edit-text-area.component';
import { EditDatepickerComponent } from './layout/edit-controls/edit-datepicker/edit-datepicker.component';
import { EditMultiSelectComponent } from './layout/edit-controls/edit-multi-select/edit-multi-select.component';
import { EditSelectComponent } from './layout/edit-controls/edit-select/edit-select.component';
import { EditButtonComponent } from './layout/edit-controls/edit-button/edit-button.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { ASWSettingsService } from './layout/shared-service/asw-settings.service';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    TextboxComponent,
    TextAreaComponent,
    SelectComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    DatepickerComponent,
    ButtonComponent,
    ConfirmDialogComponent,
    EditTextboxComponent,
    EditTextAreaComponent,
    EditDatepickerComponent,
    EditSelectComponent,
    EditMultiSelectComponent,
    EditButtonComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [ASWSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
