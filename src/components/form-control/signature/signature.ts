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
import { AswDigitalDialog, Constants } from '@asoftwareworld/form-builder/form-control/core';
import { AswImageDrawing } from '@asoftwareworld/form-builder/image-drawing';

@Component({
    selector: 'asw-signature',
    templateUrl: './signature.html'
})
export class AswSignature {

    constants: any = Constants;

    @Input() control: any;

    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() signatureUpdateEvent = new EventEmitter<{ control: any, index: number }>();
    @Output() signatureDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<number>();

    imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    constructor(public dialog: MatDialog) { }

    deleteSignatureDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.signatureDeleteEvent.emit(controlIndex);
            }
        });
    }

    signatureDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswImageDrawing, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.signatureUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    editSignatureDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswDigitalDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.signatureUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    duplicateSignatureControl(control: any): void {
        this.duplicateControl.emit(control);
    }
}
