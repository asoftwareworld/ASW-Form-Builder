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
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { AswTextareaDialogComponent } from './text-area-dialog.component';

@Component({
    selector: 'asw-text-area',
    templateUrl: './text-area.component.html'
})
export class AswTextareaComponent {

    constants: any = Constants;
    /**
     * TextArea control
     */
    @Input() control: any;

    /**
     * TextArea control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() textAreaUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() textAreaDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteTextAreaDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textAreaDeleteEvent.emit(controlIndex);
            }
        });
    }

    editTextAreaDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswTextareaDialogComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textAreaUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
