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
import { QrCodeControl } from './qrcode-control';
import { AswQrCodeDialog } from './qrcode-dialog';

@Component({
    selector: 'asw-qrcode',
    templateUrl: './qrcode.html'
})
export class AswQrCode {

    constants: any = Constants;
    /**
     * QR Code control
     */
    @Input() control: QrCodeControl | null = null;

    /**
     * QR Code control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;

    @Input() isPreviewTemplate = false;

    @Output() qrCodeUpdateEvent = new EventEmitter<{control: QrCodeControl, index: number}>();
    @Output() qrCodeDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<QrCodeControl>();

    constructor(public dialog: MatDialog) {
    }

    deleteQrCodeDialog(control: QrCodeControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.qrCodeDeleteEvent.emit(controlIndex);
            }
        });
    }

    editQrCodeDialog(control: QrCodeControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswQrCodeDialog, {
            disableClose: true,
            width: '80%',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.qrCodeUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }

    duplicateQrCodeControl(control: QrCodeControl): void {
        this.duplicateControl.emit(control);
    }
}
