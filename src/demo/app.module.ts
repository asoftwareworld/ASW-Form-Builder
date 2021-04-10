import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AswPreviewTemplateModule } from '@asoftwareworld/form-builder/preview-template';
import { AswTextboxModule } from '@asoftwareworld/form-builder/form-control/textbox';
import { AswFormBuilderModule } from '@asoftwareworld/form-builder/form-builder';
import { ComponentsModule } from './shared/component/component.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PreviewTemplateComponent } from './components/preview-template/preview-template.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PreviewTemplateComponent,
        AboutUsComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        ComponentsModule,
        AswFormBuilderModule,
        AswPreviewTemplateModule,
        AswTextboxModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
