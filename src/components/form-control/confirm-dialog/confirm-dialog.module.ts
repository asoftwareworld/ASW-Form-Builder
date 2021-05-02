/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AswConfirmDialog } from './confirm-dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
    ],
    declarations: [
        AswConfirmDialog
    ],
    exports: [
        AswConfirmDialog
    ]
})
export class AswConfirmDialogModule { }
