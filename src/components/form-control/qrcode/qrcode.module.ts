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
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { AswConfirmDialogModule } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { AswQrCodeModule } from '@asoftwareworld/qrcode';

import { AswQrCode } from './qrcode';
import { AswQrCodeDialog } from './qrcode-dialog';
import { MatExpansionModule } from '@angular/material/expansion';

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
        AswConfirmDialogModule,
        AswQrCodeModule,
        MatButtonModule,
        MatSliderModule,
        MatExpansionModule
    ],
    declarations: [
        AswQrCode,
        AswQrCodeDialog
    ],
    exports: [
        AswQrCode,
        AswQrCodeDialog
    ]
})
export class QrCodeModule { }
