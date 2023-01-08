/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AswAutocompleteModule } from '@asoftwareworld/form-builder/form-control/autocomplete';
import { AswButtonModule } from '@asoftwareworld/form-builder/form-control/button';
import { AswCalculationModule } from '@asoftwareworld/form-builder/form-control/calculation';
import { AswCheckboxModule } from '@asoftwareworld/form-builder/form-control/checkbox';
import { NotificationService } from '@asoftwareworld/form-builder/form-control/core';
import { AswDatepickerModule } from '@asoftwareworld/form-builder/form-control/datepicker';
import { AswDividerModule } from '@asoftwareworld/form-builder/form-control/divider';
import { AswDrawingModule } from '@asoftwareworld/form-builder/form-control/drawing';
import { AswGpsModule } from '@asoftwareworld/form-builder/form-control/gps';
import { AswHeaderModule } from '@asoftwareworld/form-builder/form-control/header';
import { AswImageModule } from '@asoftwareworld/form-builder/form-control/image';
import { AswMultiSelectModule } from '@asoftwareworld/form-builder/form-control/multi-select';
import { AswNumberModule } from '@asoftwareworld/form-builder/form-control/number';
import { AswParagraphModule } from '@asoftwareworld/form-builder/form-control/paragraph';
import { QrCodeModule } from '@asoftwareworld/form-builder/form-control/qrcode';
import { AswRadioButtonModule } from '@asoftwareworld/form-builder/form-control/radio-button';
import { AswSelectModule } from '@asoftwareworld/form-builder/form-control/select';
import { AswSignatureModule } from '@asoftwareworld/form-builder/form-control/signature';
import { AswSlideToggleModule } from '@asoftwareworld/form-builder/form-control/slide-toggle';
import { AswTextareaModule } from '@asoftwareworld/form-builder/form-control/textarea';
import { AswTextFieldModule } from '@asoftwareworld/form-builder/form-control/textfield';
import { AswPreviewTemplate } from './preview-template';

@NgModule({
    declarations: [AswPreviewTemplate],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AswAutocompleteModule,
        AswButtonModule,
        AswCheckboxModule,
        AswDatepickerModule,
        AswDividerModule,
        AswDrawingModule,
        AswGpsModule,
        AswHeaderModule,
        AswImageModule,
        AswMultiSelectModule,
        AswParagraphModule,
        AswSelectModule,
        AswSignatureModule,
        AswSlideToggleModule,
        AswTextareaModule,
        AswTextFieldModule,
        AswRadioButtonModule,
        MatSnackBarModule,
        QrCodeModule,
        AswNumberModule,
        AswCalculationModule
    ],
    exports: [AswPreviewTemplate],
    providers: [
        NotificationService
    ]
})
export class AswPreviewTemplateModule { }
