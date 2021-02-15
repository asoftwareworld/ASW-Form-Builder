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
import { PreviewTemplateComponent } from './preview-template.component';

@NgModule({
  declarations: [PreviewTemplateComponent],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ControlsModule
  ],
  exports: [PreviewTemplateComponent]
})
export class PreviewTemplateModule { }
