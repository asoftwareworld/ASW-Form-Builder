/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { QrCodeControl } from './qrcode-control';

@Component({
    selector: 'asw-qrcode-dialog',
    templateUrl: './qrcode-dialog.html'
})
export class AswQrCodeDialog implements OnInit {
    constants: any = Constants;
    aswEditQrCodeForm!: FormGroup;
    status!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswQrCodeDialog>,
        @Inject(MAT_DIALOG_DATA) public control: QrCodeControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditQrCodeForm = this.formBuilder.group({
            qrCodeSize: [''],
            centerImage: ['', []],
            centerImageSize: [''],
            errorCorrectionLevel: [''],
            value: [''],
            column: ['']
        });
    }

    editProperty(control: QrCodeControl): void {
        this.aswEditQrCodeForm.setValue({
            qrCodeSize: control.qrCodeSize,
            centerImage: control.centerImage,
            centerImageSize: control.centerImageSize,
            errorCorrectionLevel: control.errorCorrectionLevel,
            value: control.value,
            column: control.column,
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditQrCodeForm.invalid) {
            return;
        }
        this.aswEditQrCodeForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditQrCodeForm.value);
    }
}
