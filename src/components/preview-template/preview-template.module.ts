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
import { AswCheckboxModule } from '@asoftwareworld/form-builder/form-control/checkbox';
import { AswDatepickerModule } from '@asoftwareworld/form-builder/form-control/datepicker';
import { AswDividerModule } from '@asoftwareworld/form-builder/form-control/divider';
import { AswDrawingModule } from '@asoftwareworld/form-builder/form-control/drawing';
import { AswGpsModule } from '@asoftwareworld/form-builder/form-control/gps';
import { AswHeaderModule } from '@asoftwareworld/form-builder/form-control/header';
import { AswImageModule } from '@asoftwareworld/form-builder/form-control/image';
import { AswMultiSelectModule } from '@asoftwareworld/form-builder/form-control/multi-select';
import { AswParagraphModule } from '@asoftwareworld/form-builder/form-control/paragraph';
import { QrCodeModule } from '@asoftwareworld/form-builder/form-control/qrcode';
import { AswRadioButtonModule } from '@asoftwareworld/form-builder/form-control/radio-button';
import { AswSelectModule } from '@asoftwareworld/form-builder/form-control/select';
import { AswSignatureModule } from '@asoftwareworld/form-builder/form-control/signature';
import { AswSlideToggleModule } from '@asoftwareworld/form-builder/form-control/slide-toggle';
import { AswTextareaModule } from '@asoftwareworld/form-builder/form-control/textarea';
import { AswTextboxModule } from '@asoftwareworld/form-builder/form-control/textbox';
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
        AswTextboxModule,
        AswRadioButtonModule,
        MatSnackBarModule,
        QrCodeModule
    ],
    exports: [AswPreviewTemplate]
})
export class AswPreviewTemplateModule { }
