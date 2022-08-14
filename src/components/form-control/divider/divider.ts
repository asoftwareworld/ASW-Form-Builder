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

@Component({
    selector: 'asw-divider',
    templateUrl: './divider.html'
})
export class AswDivider {

    constants: any = Constants;
    /**
     * Divider control
     */
    @Input() control: any;

    /**
     * Divider control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() dividerDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<any>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete divider control based on control index
     * @param control divider control items
     * @param controlIndex divider control index
     */
    deleteDividerDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.dividerDeleteEvent.emit(controlIndex);
            }
        });
    }

    duplicateDividerControl(control: any ): void {
        this.duplicateControl.emit(control);
    }
}
