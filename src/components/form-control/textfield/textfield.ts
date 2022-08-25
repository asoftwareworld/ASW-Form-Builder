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
import { AswTextDialog, Constants } from '@asoftwareworld/form-builder/form-control/core';
import { TextFieldControl } from './textfield-control';

@Component({
    selector: 'asw-textfield',
    templateUrl: './textfield.html'
})
export class AswTextField {

    constants: any = Constants;
    /**
     * TextField control
     */
    @Input() control: TextFieldControl | null = null;

    /**
     * TextField control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;

    @Input() isPreviewTemplate = false;

    @Output() textFieldUpdateEvent = new EventEmitter<{control: TextFieldControl, index: number}>();
    @Output() textFieldDeleteEvent = new EventEmitter<number>();
    @Output() aswModelChange = new EventEmitter<TextFieldControl>();
    @Output() duplicateControl = new EventEmitter<TextFieldControl>();

    constructor(public dialog: MatDialog) {
    }

    deleteTextFieldDialog(control: TextFieldControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textFieldDeleteEvent.emit(controlIndex);
            }
        });
    }

    editTextFieldDialog(control: TextFieldControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswTextDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textFieldUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }

    onChange(control: TextFieldControl): void {
        this.aswModelChange.emit(control);
    }

    duplicateTextFieldControl(control: TextFieldControl): void {
        this.duplicateControl.emit(control);
    }
}
