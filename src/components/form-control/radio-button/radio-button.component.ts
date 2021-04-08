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
import { AswSelectDialogComponent, Constants } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-radio-button',
    templateUrl: './radio-button.component.html'
})
export class AswRadioButtonComponent {

    constants: any = Constants;
    /**
     * RadioButton control
     */
    @Input() control: any;

    /**
     * RadioButton control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() radioButtonUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() radioButtonDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteRadioButtonDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.radioButtonDeleteEvent.emit(controlIndex);
            }
        });
    }

    editRadioButtonDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswSelectDialogComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.radioButtonUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
