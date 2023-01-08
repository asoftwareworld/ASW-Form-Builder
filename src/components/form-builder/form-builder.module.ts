/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
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
import { AswJsonPreviewDialogModule } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
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
import { AswFormBuilder } from './form-builder';

@NgModule({
    declarations: [
        AswFormBuilder
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
        DragDropModule,
        ClipboardModule,
        MatIconModule,
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
        AswJsonPreviewDialogModule,
        QrCodeModule,
        AswNumberModule,
        AswCalculationModule,
        MatExpansionModule,
        MatCardModule
    ],
    exports: [AswFormBuilder],
    providers: [
        NotificationService
    ]
})
export class AswFormBuilderModule { }
