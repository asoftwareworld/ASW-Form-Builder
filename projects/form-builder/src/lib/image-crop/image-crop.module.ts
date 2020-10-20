import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageCropComponent } from './image-crop.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ImageCropComponent
    ],
    exports: [
        ImageCropComponent
    ]
})
export class ImageCropModule {}
