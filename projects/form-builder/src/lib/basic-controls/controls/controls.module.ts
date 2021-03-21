/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './../../material.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DividerComponent } from './divider/divider.component';
import { GpsComponent } from './gps/gps.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SignatureComponent } from './signature/signature.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextboxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    TextboxComponent,
    TextAreaComponent,
    SelectComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    DatepickerComponent,
    ButtonComponent,
    AutocompleteComponent,
    CheckboxComponent,
    SlideToggleComponent,
    HeaderComponent,
    ParagraphComponent,
    DividerComponent,
    ImageComponent,
    GpsComponent,
    SignatureComponent
  ],
  exports: [
    TextboxComponent,
    TextAreaComponent,
    SelectComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    DatepickerComponent,
    ButtonComponent,
    AutocompleteComponent,
    CheckboxComponent,
    SlideToggleComponent,
    HeaderComponent,
    ParagraphComponent,
    DividerComponent,
    ImageComponent,
    GpsComponent,
    SignatureComponent
  ]
})
export class ControlsModule { }
