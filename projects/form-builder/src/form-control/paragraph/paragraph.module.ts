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

import { AswParagraphComponent } from './paragraph.component';
import { AswParagraphDialogComponent } from './paragraph-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AswConfirmDialogModule } from '../shared/confirm-dialog/confirm-dialog.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatButtonToggleModule,
        AswConfirmDialogModule
    ],
    declarations: [
        AswParagraphComponent,
        AswParagraphDialogComponent
    ],
    exports: [
        AswParagraphComponent,
        AswParagraphDialogComponent
    ]
})
export class AswParagraphModule { }
