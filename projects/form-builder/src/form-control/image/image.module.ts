/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AswImageComponent } from './image.component';
import { AswImageUploadDialogComponent } from './image-upload-dialog.component';
import { ImageCropModule } from '../../image-crop/image-crop.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialogModule } from '../shared/confirm-dialog/confirm-dialog.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ImageCropModule,
        MatDividerModule,
        MatTooltipModule,
        MatDialogModule,
        MatIconModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswImageComponent,
        AswImageUploadDialogComponent
    ],
    exports: [
        AswImageComponent,
        AswImageUploadDialogComponent
    ]
})
export class AswImageModule { }
