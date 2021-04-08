/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AswConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MatDialogModule,
    ],
    declarations: [
        AswConfirmDialogComponent
    ],
    exports: [
        AswConfirmDialogComponent
    ]
})
export class AswConfirmDialogModule { }
