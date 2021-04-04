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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { AswConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';

import { AswDatepickerDialogComponent } from './datepicker-dialog.component';
import { AswDatepickerComponent } from './datepicker.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatDatepickerModule,
        MatIconModule,
        MatTooltipModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswDatepickerComponent,
        AswDatepickerDialogComponent
    ],
    exports: [
        AswDatepickerComponent,
        AswDatepickerDialogComponent
    ]
})
export class AswDatepickerModule { }
