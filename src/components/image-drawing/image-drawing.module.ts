/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AswImageDrawing } from './image-drawing';

@NgModule({
    declarations: [
        AswImageDrawing
    ],
    exports: [
        AswImageDrawing,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        MatButtonToggleModule
    ]
})
export class AswImageDrawingModule {}
