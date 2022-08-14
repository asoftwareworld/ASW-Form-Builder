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
import { HeaderControl } from './header-control';
import { AswHeaderDialog } from './header-dialog';

@Component({
    selector: 'asw-header',
    templateUrl: './header.html'
})
export class AswHeader {

    constants: any = Constants;
    /**
     * Header control
     */
    @Input() control: HeaderControl | null = null;

    /**
     * Header control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() headerUpdateEvent = new EventEmitter<{ control: HeaderControl, index: number }>();
    @Output() headerDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<HeaderControl>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete header control based on control index
     * @param control header control items
     * @param controlIndex header control index
     */
    deleteHeaderDialog(control: HeaderControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.headerDeleteEvent.emit(controlIndex);
            }
        });
    }

    editHeaderDialog(control: HeaderControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswHeaderDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.headerUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    duplicateHeaderControl(control: HeaderControl): void {
        this.duplicateControl.emit(control);
    }
}
