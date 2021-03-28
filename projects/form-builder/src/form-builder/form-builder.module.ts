/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AswAutocompleteModule } from '../form-control/autocomplete';
import { AswButtonModule } from '../form-control/button';
import { AswCheckboxModule } from '../form-control/checkbox';
import { AswDatepickerModule } from '../form-control/datepicker';
import { AswDividerModule } from '../form-control/divider';
import { AswDrawingModule } from '../form-control/drawing';
import { AswGpsModule } from '../form-control/gps';
import { AswHeaderModule } from '../form-control/header';
import { AswImageModule } from '../form-control/image';
import { AswMultiSelectModule } from '../form-control/multi-select';
import { AswParagraphModule } from '../form-control/paragraph';
import { AswSelectModule } from '../form-control/select';
import { JsonPreviewDialogComponent } from '../form-control/shared/json-preview-dialog/json-preview-dialog.component';
import { AswSignatureModule } from '../form-control/signature';
import { AswSlideToggleModule } from '../form-control/slide-toggle';
import { AswTextareaModule } from '../form-control/text-area';
import { AswTextboxModule } from '../form-control/text-box';

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
      MatDialogModule,
      DragDropModule,
      ClipboardModule,
      MatIconModule,
      AswAutocompleteModule,
      AswButtonModule,
      AswCheckboxModule,
      AswDatepickerModule,
      AswDividerModule,
      AswDrawingModule,
      AswGpsModule,
      AswHeaderModule,
      AswImageModule,
      AswMultiSelectModule,
      AswParagraphModule,
      AswSelectModule,
      AswSignatureModule,
      AswSlideToggleModule,
      AswTextareaModule,
      AswTextboxModule
    ],
  exports: [FormBuilderComponent]
})
export class FormBuilderModule { }
