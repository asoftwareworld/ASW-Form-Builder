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
import { Constants, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';
import { NumberControl } from './number-control';
import { AswNumberDialog } from './number-dialog';

@Component({
    selector: 'asw-number',
    templateUrl: './number.html'
})
export class AswNumber {

    constants: any = Constants;
    objectUtils = ObjectUtils;
    /**
     * Number control
     */
    @Input() control: NumberControl | null = null;

    /**
     * Number control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;

    @Input() isPreviewTemplate = false;

    @Output() numberUpdateEvent = new EventEmitter<{ control: NumberControl, index: number }>();
    @Output() numberDeleteEvent = new EventEmitter<number>();
    @Output() aswModelChange = new EventEmitter<NumberControl>();
    @Output() duplicateControl = new EventEmitter<NumberControl>();

    constructor(public dialog: MatDialog) {
    }

    deleteNumberDialog(control: NumberControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.numberDeleteEvent.emit(controlIndex);
            }
        });
    }

    editNumberDialog(control: NumberControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswNumberDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.numberUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    onChange(control: NumberControl): void {
        this.aswModelChange.emit(control);
    }

    duplicateNumberControl(control: NumberControl): void {
        this.duplicateControl.emit(control);
    }
}
