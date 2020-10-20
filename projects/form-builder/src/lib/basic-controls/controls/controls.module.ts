import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material.module';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TextboxComponent } from './text-box/text-box.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectComponent } from './select/select.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonComponent } from './button/button.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { HeaderComponent } from './header/header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { DividerComponent } from './divider/divider.component';
import { ImageComponent } from'./image/image.component';

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
    ImageComponent
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
    ImageComponent
  ]
})
export class ControlsModule { }
