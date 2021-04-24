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
import { AswSelectDialog, Constants, SelectControl } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-multi-select',
    templateUrl: './multi-select.html'
})
export class AswMultiSelect {

    constants: any = Constants;
    /**
     * MultiSelect control
     */
    @Input() control: SelectControl | null = null;

    /**
     * MultiSelect control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() multiSelectUpdateEvent = new EventEmitter<{control: SelectControl, index: number}>();
    @Output() multiSelectDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteMultiSelectDialog(control: SelectControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.multiSelectDeleteEvent.emit(controlIndex);
            }
        });
    }

    editMultiSelectDialog(control: SelectControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswSelectDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.multiSelectUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
