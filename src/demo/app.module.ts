import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewTemplateModule } from '@asoftwareworld/form-builder/preview-template';
import { AswTextboxModule } from '@asoftwareworld/form-builder/form-control/text-box';
import { FormBuilderModule } from '@asoftwareworld/form-builder/form-builder';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormBuilderModule,
        PreviewTemplateModule,
        AswTextboxModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
