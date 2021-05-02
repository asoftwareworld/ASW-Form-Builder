/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AswJsonPreviewDialog } from './json-preview-dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        ClipboardModule
    ],
    declarations: [
        AswJsonPreviewDialog
    ],
    exports: [
        AswJsonPreviewDialog
    ]
})
export class AswJsonPreviewDialogModule { }
