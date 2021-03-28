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
import { BrowserModule } from '@angular/platform-browser';
import { AswImageDrawingModule } from '../../image-drawing/image-drawing.module';
import { AswConfirmDialogModule } from '../shared/confirm-dialog/confirm-dialog.module';

import { AswDrawingDialogComponent } from './drawing-dialog.component';
import { AswDrawingComponent } from './drawing.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatTooltipModule,
        AswImageDrawingModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswDrawingComponent,
        AswDrawingDialogComponent
    ],
    exports: [
        AswDrawingComponent,
        AswDrawingDialogComponent
    ]
})
export class AswDrawingModule { }
