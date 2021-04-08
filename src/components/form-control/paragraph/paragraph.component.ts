/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialogComponent } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core/public-api';
import { AswParagraphDialogComponent } from './paragraph-dialog.component';

@Component({
    selector: 'asw-paragraph',
    templateUrl: './paragraph.component.html'
})
export class AswParagraphComponent {

    constants: any = Constants;
    /**
     * Paragraph control
     */
    @Input() control: any;

    /**
     * Paragraph control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() paragraphUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() paragraphDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteParagraphDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.label, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.paragraphDeleteEvent.emit(controlIndex);
            }
        });
    }

    editParagraphDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswParagraphDialogComponent, {
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
}
