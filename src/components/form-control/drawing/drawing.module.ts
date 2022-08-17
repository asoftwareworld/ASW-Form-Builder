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
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialogModule } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { AswImageDrawingModule } from '@asoftwareworld/form-builder/image-drawing';

import { AswDrawing } from './drawing';
import { AswDrawingDialog } from './drawing-dialog';
import { AswImageDrawingDialog } from './image-drawing-dialog';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatTooltipModule,
        AswImageDrawingModule,
        AswConfirmDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatInputModule
    ],
    declarations: [
        AswDrawing,
        AswImageDrawingDialog,
        AswDrawingDialog
    ],
    exports: [
        AswDrawing,
        AswImageDrawingDialog,
        AswDrawingDialog
    ]
})
export class AswDrawingModule { }
