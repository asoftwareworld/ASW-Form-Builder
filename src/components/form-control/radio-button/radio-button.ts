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
import { AswSingleSelectDialog, Constants } from '@asoftwareworld/form-builder/form-control/core';
import { RadioButtonControl } from './radio-button-control';

@Component({
    selector: 'asw-radio-button',
    templateUrl: './radio-button.html'
})
export class AswRadioButton {

    constants: any = Constants;
    /**
     * RadioButton control
     */
    @Input() control: RadioButtonControl | null = null;

    /**
     * RadioButton control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() radioButtonUpdateEvent = new EventEmitter<{control: RadioButtonControl, index: number}>();
    @Output() radioButtonDeleteEvent = new EventEmitter<number>();
    @Output() selectionChange = new EventEmitter<RadioButtonControl>();
    @Output() duplicateControl = new EventEmitter<RadioButtonControl>();

    constructor(public dialog: MatDialog) { }

    deleteRadioButtonDialog(control: RadioButtonControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.radioButtonDeleteEvent.emit(controlIndex);
            }
        });
    }

    editRadioButtonDialog(control: RadioButtonControl, controlIndex: number): void {
        control.options.forEach(element => {
            element.isChecked = control.value === element.key ? true : false;
        });
        const dialogRef = this.dialog.open(AswSingleSelectDialog, {
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

    onSelectionChange(control: RadioButtonControl): void {
        control.options.forEach(element => {
            element.isChecked = control.value === element.key ? true : false;
        });
        this.selectionChange.emit(control);
    }

    duplicateRadioButtonControl(control: RadioButtonControl): void {
        this.duplicateControl.emit(control);
    }
}
