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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswDigitalDialog } from '../shared-dialog/digital/digital-dialog';
import { AswMultiSelectDialog } from '../shared-dialog/multi-select/multi-select-dialog';
import { AswSingleSelectDialog } from '../shared-dialog/single-select/single-select-dialog';
import { AswTextDialog } from '../shared-dialog/text/text-dialog';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatDividerModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatRadioModule
    ],
    declarations: [
        AswTextDialog,
        AswDigitalDialog,
        AswSingleSelectDialog,
        AswMultiSelectDialog
    ],
    exports: [
        AswTextDialog,
        AswDigitalDialog,
        AswSingleSelectDialog,
        AswMultiSelectDialog
    ]
})
export class AswSharedDialogModule { }
