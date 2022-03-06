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

import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialogModule } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { AswImageCropModule } from '@asoftwareworld/form-builder/image-crop';
import { AswImage } from './image';
import { AswImageUploadDialog } from './image-upload-dialog';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AswImageCropModule,
        MatDividerModule,
        MatTooltipModule,
        MatDialogModule,
        MatIconModule,
        MatTooltipModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswImage,
        AswImageUploadDialog
    ],
    exports: [
        AswImage,
        AswImageUploadDialog
    ]
})
export class AswImageModule { }
