/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { ParagraphControl } from './paragraph-control';
import { AswParagraphDialog } from './paragraph-dialog';

@Component({
    selector: 'asw-paragraph',
    templateUrl: './paragraph.html'
})
export class AswParagraph {

    constants: any = Constants;
    /**
     * Paragraph control
     */
    @Input() control: ParagraphControl | null = null;

    /**
     * Paragraph control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() paragraphUpdateEvent = new EventEmitter<{control: ParagraphControl, index: number}>();
    @Output() paragraphDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<ParagraphControl>();

    constructor(public dialog: MatDialog) { }

    deleteParagraphDialog(control: ParagraphControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.paragraphDeleteEvent.emit(controlIndex);
            }
        });
    }

    editParagraphDialog(control: ParagraphControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswParagraphDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.paragraphUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }

    duplicateParagraphControl(control: ParagraphControl): void {
        this.duplicateControl.emit(control);
    }
}
