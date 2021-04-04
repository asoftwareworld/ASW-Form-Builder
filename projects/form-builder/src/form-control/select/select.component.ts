/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from './../common/constants';
import { AswConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { AswSelectDialogComponent } from './../shared/select-dialog/select-dialog.component';

@Component({
    selector: 'asw-select',
    templateUrl: './select.component.html'
})
export class AswSelectComponent {

    constants: any = Constants;
    /**
     * Select control
     */
    @Input() control: any;

    /**
     * Select control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
    @Input() isPreviewTemplate = false;

    @Output() selectUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() selectDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteSelectDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.selectDeleteEvent.emit(controlIndex);
            }
        });
    }

    editSelectDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswSelectDialogComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.selectUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
