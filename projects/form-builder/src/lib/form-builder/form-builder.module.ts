import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsModule } from './../basic-controls/controls/controls.module';
import { EditControlsModule } from './../basic-controls/edit-controls/edit-controls.module';
import { FormBuilderComponent } from './form-builder.component';
import { MaterialModule } from '../material.module';
import { JsonPreviewDialogComponent } from './../shared-components/json-preview-dialog/json-preview-dialog.component';

@NgModule({
  declarations: [FormBuilderComponent,
    JsonPreviewDialogComponent],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ControlsModule,
    EditControlsModule
  ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
