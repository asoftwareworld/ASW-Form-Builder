import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TextFieldDemoComponent } from './components/form-control/textbox-demo/textbox-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PreviewTemplateComponent } from './components/preview-template/preview-template.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'preview-template', component: PreviewTemplateComponent},
    {path: 'textbox', component: TextFieldDemoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
