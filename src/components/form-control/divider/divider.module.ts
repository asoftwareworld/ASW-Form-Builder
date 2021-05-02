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
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialogModule } from '@asoftwareworld/form-builder/form-control/confirm-dialog';

import { AswDivider } from './divider';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatDialogModule,
        MatTooltipModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswDivider
    ],
    exports: [
        AswDivider
    ]
})
export class AswDividerModule { }
