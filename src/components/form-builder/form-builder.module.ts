/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AswSelectModule } from '@asoftwareworld/form-builder/form-control/select';
import { AswSignatureModule } from '@asoftwareworld/form-builder/form-control/signature';
import { AswSlideToggleModule } from '@asoftwareworld/form-builder/form-control/slide-toggle';
import { AswTextareaModule } from '@asoftwareworld/form-builder/form-control/textarea';
import { AswTextboxModule } from '@asoftwareworld/form-builder/form-control/textbox';
import { AswRadioButtonModule } from '@asoftwareworld/form-builder/form-control/radio-button';
import { AswJsonPreviewDialogModule } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
import { AswFormBuilder } from './form-builder';

@NgModule({
    declarations: [
        AswFormBuilder
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
        AswTextboxModule,
        AswRadioButtonModule,
        AswJsonPreviewDialogModule
    ],
    exports: [AswFormBuilder]
})
export class AswFormBuilderModule { }
