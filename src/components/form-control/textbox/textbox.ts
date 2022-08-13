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
import { TextboxControl } from './textbox-control';
import { AswTextboxDialog } from './textbox-dialog';

@Component({
    selector: 'asw-textbox',
    templateUrl: './textbox.html'
})
export class AswTextbox {

    constants: any = Constants;
    /**
     * Textbox control
     */
    @Input() control: TextboxControl | null = null;

    /**
     * Textbox control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;

    @Input() isPreviewTemplate = false;

    @Output() textboxUpdateEvent = new EventEmitter<{control: TextboxControl, index: number}>();
    @Output() textboxDeleteEvent = new EventEmitter<number>();
    @Output() aswModelChange = new EventEmitter<TextboxControl>();

    constructor(public dialog: MatDialog) {
    }

    deleteTextboxDialog(control: TextboxControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textboxDeleteEvent.emit(controlIndex);
            }
        });
    }

    editTextboxDialog(control: TextboxControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswTextboxDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textboxUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }

    onChange(control: TextboxControl): void {
        this.aswModelChange.emit(control);
    }
}
