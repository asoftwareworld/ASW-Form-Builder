/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { ControlsModule } from './../basic-controls/controls/controls.module';
import { EditControlsModule } from './../basic-controls/edit-controls/edit-controls.module';
import { JsonPreviewDialogComponent } from './../shared-components/json-preview-dialog/json-preview-dialog.component';
import { FormBuilderComponent } from './form-builder.component';

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
