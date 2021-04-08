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
import { AswSelectDialogComponent, Constants } from '@asoftwareworld/form-builder/form-control/core/public-api';

@Component({
    selector: 'asw-checkbox',
    templateUrl: './checkbox.component.html'
})
export class AswCheckboxComponent {

    constants: any = Constants;
    @Input() control: any;

    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() checkboxUpdateEvent = new EventEmitter<{ control: any, index: number }>();
    @Output() checkboxDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteCheckboxDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.checkboxDeleteEvent.emit(controlIndex);
            }
        });
    }

    editCheckboxDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswSelectDialogComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.checkboxUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }
}
