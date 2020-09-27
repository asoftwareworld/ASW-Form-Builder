import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderComponent } from './layout/form-builder/form-builder.component';

import { ControlsModule } from './layout/form-builder/controls/controls.module';
import { EditControlsModule } from './layout/edit-controls/edit-controls.module';
import { ComponentsModule } from './layout/shared-components/components/components.module';
import { MaterialModule } from './material.module';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { ASWSettingsService } from './layout/shared-service/asw-settings.service';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    ControlsModule,
    EditControlsModule,
    AppRoutingModule,
  ],
  entryComponents: [],
  providers: [ASWSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
