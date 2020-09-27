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
import { ConfirmDialogComponent } from './../shared-components/confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
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
    EditParagraphComponent
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
    EditParagraphComponent
  ]
})
export class EditControlsModule { }
