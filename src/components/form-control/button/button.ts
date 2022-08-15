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
import { ButtonControl } from './button-control';
import { AswButtonDialog } from './button-dialog';

@Component({
    selector: 'asw-button',
    templateUrl: './button.html'
})
export class AswButton {

    constants: any = Constants;
    /**
     * Button control
     */
    @Input() control: ButtonControl | null = null;

    /**
     * Button control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() buttonClickEvent = new EventEmitter<string>();
    @Output() buttonUpdateEvent = new EventEmitter<{control: ButtonControl, index: number}>();
    @Output() buttonDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<ButtonControl>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete button control based on control index
     * @param control button control items
     * @param controlIndex button control index
     */
    deleteButtonDialog(control: ButtonControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.buttonDeleteEvent.emit(controlIndex);
            }
        });
    }

    editButtonDialog(control: ButtonControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswButtonDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.buttonUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }

    buttonClick(type: string): void {
        this.buttonClickEvent.emit(type);
    }

    duplicateButtonControl(control: ButtonControl): void {
        this.duplicateControl.emit(control);
    }
}
