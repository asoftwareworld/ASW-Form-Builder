import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AswFormBuilderModule } from '@asoftwareworld/form-builder/form-builder';
import { AswTextFieldModule } from '@asoftwareworld/form-builder/form-control/textfield';
import { AswPreviewTemplateModule } from '@asoftwareworld/form-builder/preview-template';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TextFieldDemoComponent } from './components/form-control/textbox-demo/textbox-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PreviewTemplateComponent } from './components/preview-template/preview-template.component';
import { ComponentsModule } from './shared/component/component.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PreviewTemplateComponent,
        TextFieldDemoComponent,
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
        AswTextFieldModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
