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

@Component({
    selector: 'asw-qrcode-dialog',
    templateUrl: './qrcode-dialog.html',
    styleUrls: ['./qrcode-dialog.scss']
})
export class AswQrCodeDialog implements OnInit {
    constants: any = Constants;
    value = 0.4;
    errorCorrectionLevels = ['L', 'M', 'Q', 'H'];
    modes = ['Numeric', 'Alphanumeric', 'Byte', 'Kanji'];
    
    aswFormatForm!: FormGroup;
    aswDensityForm!: FormGroup;
    aswQrLogoStyleForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswQrCodeDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        if (this.control) {
            this.setData();
        }
        this.aswFormatForm.valueChanges.subscribe(val => {
            if (this.aswFormatForm.invalid) {
                return;
            }
            this.control.width = val.width;
            this.control.height = val.height;
            this.control.outerMargin = val.outerMargin;
            this.control.value = val.value;
        });
        this.aswQrLogoStyleForm.valueChanges.subscribe(val => {
            if (this.aswQrLogoStyleForm.invalid) {
                return;
            }
            this.control.logoStyle = val;
        });
        this.aswDensityForm.valueChanges.subscribe(val => {
            if (this.aswQrLogoStyleForm.invalid) {
                return;
            }
            this.control.density = val;
        });
    }

    validateFormBuilder(): void {
        this.aswFormatForm = this.formBuilder.group({
            value: [''],
            width: [200, [Validators.required]],
            height: [200, [Validators.required]],
            outerMargin: [0],
            column: ['']
        });
        this.aswDensityForm = this.formBuilder.group({
            typeNumber: [0, [Validators.required]],
            mode: ['Byte', [Validators.required]],
            errorCorrectionLevel: ['Q']
        });
        this.aswQrLogoStyleForm = this.formBuilder.group({
            hideBackgroundCircle: [true],
            logoSize: [0.4, [Validators.required]],
            logoMargin: [0]
        });
    }

    setData(): void {
        this.aswFormatForm.setValue({
            value: this.control.value,
            width: this.control.width,
            height: this.control.height,
            outerMargin: this.control.outerMargin,
            column: this.control.column
        });
        this.aswDensityForm.patchValue({
            typeNumber: this.control.density.typeNumber,
            mode: this.control.density.mode,
            errorCorrectionLevel: this.control.density.errorCorrectionLevel
        });
        this.aswQrLogoStyleForm.patchValue({
            hideBackgroundCircle: this.control.logoStyle.hideBackgroundCircle,
            logoSize: this.control.logoStyle.logoSize,
            logoMargin: this.control.logoStyle.logoMargin
        });
    }

    confirm(): void {
        const option = JSON.parse(JSON.stringify({
            width: this.aswFormatForm.value.width,
            value: this.aswFormatForm.value.value,
            height: this.aswFormatForm.value.height,
            column: this.aswFormatForm.value.column,
            outerMargin: this.aswFormatForm.value.outerMargin,
            logo: this.control.logo,
            density: this.control.density,
            logoStyle: this.control.logoStyle,
            controlType: this.control.controlType
        }));
        this.dialogRef.close(option);
    }

    insertImage(event: any): void {
        this.control.logo = event.target.value;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
