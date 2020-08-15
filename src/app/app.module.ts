import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AswFormBuilderComponent } from './layout/asw-form-builder/asw-form-builder.component';
import { ComponentsModule } from './layout/shared-components/components/components.module';
import { MaterialModule } from './material.module';
import { ConfirmDialogComponent } from './layout/shared-components/confirm-dialog/confirm-dialog.component';
import { AswEditPropertyComponent } from './layout/asw-edit-property/asw-edit-property.component';

@NgModule({
  declarations: [
    AppComponent,
    AswFormBuilderComponent,
    ConfirmDialogComponent,
    AswEditPropertyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
