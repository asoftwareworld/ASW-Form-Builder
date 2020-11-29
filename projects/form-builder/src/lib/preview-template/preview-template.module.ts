import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlsModule } from './../basic-controls/controls/controls.module';
import { PreviewTemplateComponent } from './preview-template.component';
import { MaterialModule } from '../material.module';

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
