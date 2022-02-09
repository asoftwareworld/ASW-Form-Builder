import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
    ]
})
export class ComponentsModule { }
