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
import { SelectControl } from './select-control';

@Component({
    selector: 'asw-select',
    templateUrl: './select.html'
})
export class AswSelect {

    constants: any = Constants;
    /**
     * Select control
     */
    @Input() control: SelectControl | null = null;

    /**
     * Select control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() selectUpdateEvent = new EventEmitter<{ control: SelectControl, index: number }>();
    @Output() selectDeleteEvent = new EventEmitter<number>();
    @Output() selectionChange = new EventEmitter<SelectControl>();
    @Output() duplicateControl = new EventEmitter<SelectControl>();

    constructor(public dialog: MatDialog) { }

    deleteSelectDialog(control: SelectControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.selectDeleteEvent.emit(controlIndex);
            }
        });
    }

    editSelectDialog(control: SelectControl, controlIndex: number): void {
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
                this.selectUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    onSelectionChange(control: SelectControl): void {
        control.options.forEach(element => {
            element.isChecked = control.value === element.key ? true : false;
        });
        this.selectionChange.emit(control);
    }

    duplicateSelectControl(control: SelectControl): void {
        this.duplicateControl.emit(control);
    }
}
