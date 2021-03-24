/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';

import { EditTextboxComponent } from './edit-text-box/edit-text-box.component';
import { EditTextAreaComponent } from './edit-text-area/edit-text-area.component';
import { EditSelectComponent } from './edit-select/edit-select.component';
import { EditDatepickerComponent } from './edit-datepicker/edit-datepicker.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { EditSlideToggleComponent } from './edit-slide-toggle/edit-slide-toggle.component';
import { EditHeaderComponent } from './edit-header/edit-header.component';
import { EditParagraphComponent } from './edit-paragraph/edit-paragraph.component';
import { ImageUploadDialogComponent } from './image-upload-dialog/image-upload-dialog.component';
import { ImageCropModule } from './../../image-crop/image-crop.module';
import { EditSignatureComponent } from './edit-signature/edit-signature.component';
import { EditDrawingComponent } from './edit-drawing/edit-drawing.component';
import { ConfirmDialogComponent } from './../../shared-components/confirm-dialog/confirm-dialog.component';
import { ImageDrawingModule } from '../../image-drawing/image-drawing.module';
import { EditGpsComponent } from './edit-gps/edit-gps.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ImageCropModule,
    ImageDrawingModule
  ],
  declarations: [
    EditTextboxComponent,
    EditTextAreaComponent,
    EditSelectComponent,
    EditDatepickerComponent,
    EditButtonComponent,
    ConfirmDialogComponent,
    EditSlideToggleComponent,
    EditHeaderComponent,
    EditParagraphComponent,
    ImageUploadDialogComponent,
    EditSignatureComponent,
    EditGpsComponent,
    EditDrawingComponent
  ],
  exports: [
    EditTextboxComponent,
    EditTextAreaComponent,
    EditSelectComponent,
    EditDatepickerComponent,
    EditButtonComponent,
    ConfirmDialogComponent,
    EditSlideToggleComponent,
    EditHeaderComponent,
    EditParagraphComponent,
    ImageUploadDialogComponent,
    EditSignatureComponent,
    EditGpsComponent,
    EditDrawingComponent
  ]
})
export class EditControlsModule { }
