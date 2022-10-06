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
import { AswMultiSelectDialog, Constants } from '@asoftwareworld/form-builder/form-control/core';
import { MultiSelectControl } from './multi-select-control';

@Component({
    selector: 'asw-multi-select',
    templateUrl: './multi-select.html'
})
export class AswMultiSelect {

    constants: any = Constants;
    /**
     * MultiSelect control
     */
    @Input() control: MultiSelectControl | null = null;

    /**
     * MultiSelect control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() multiSelectUpdateEvent = new EventEmitter<{ control: MultiSelectControl, index: number }>();
    @Output() multiSelectDeleteEvent = new EventEmitter<number>();
    @Output() selectionChange = new EventEmitter<MultiSelectControl>();
    @Output() duplicateControl = new EventEmitter<MultiSelectControl>();

    constructor(public dialog: MatDialog) { }

    deleteMultiSelectDialog(control: MultiSelectControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.multiSelectDeleteEvent.emit(controlIndex);
            }
        });
    }

    editMultiSelectDialog(control: MultiSelectControl, controlIndex: number): void {
        control.options.forEach(element => {
            element.isChecked = control.value.includes(element.key) ? true : false;
        });
        const dialogRef = this.dialog.open(AswMultiSelectDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.multiSelectUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    onSelectionChange(control: MultiSelectControl): void {
        control.options.forEach(element => {
            element.isChecked = control.value.includes(element.key) ? true : false;
        });
        this.selectionChange.emit(control);
    }

    duplicateMultiSelectControl(control: MultiSelectControl): void {
        this.duplicateControl.emit(control);
    }
}
