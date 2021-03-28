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
import { BrowserModule } from '@angular/platform-browser';
import { AswConfirmDialogModule } from '../shared/confirm-dialog/confirm-dialog.module';

import { AswDividerComponent } from './divider.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatDialogModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswDividerComponent
    ],
    exports: [
        AswDividerComponent
    ]
})
export class AswDividerModule { }
