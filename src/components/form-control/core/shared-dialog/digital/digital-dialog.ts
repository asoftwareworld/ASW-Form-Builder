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
import { Constants } from '../../constant/constants';
import { ObjectUtils } from './../../utils/objectutils';

@Component({
    selector: 'asw-digital-dialog',
    templateUrl: './digital-dialog.html'
})
export class AswDigitalDialog implements OnInit {

    constants: any = Constants;
    aswDigitalForm!: FormGroup;
    objectUtils = ObjectUtils;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswDigitalDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswDigitalForm = this.formBuilder.group({
            label: [],
            column: [],
            class: [],
            imageUrl: [],
            height: ['', [Validators.max(600), Validators.min(0)]],
            width: ['', [Validators.max(600), Validators.min(0)]]
        });
    }

    editProperty(control: any): void {
        this.aswDigitalForm.setValue({
            label: control.label,
            class: control.class,
            column: control.column,
            imageUrl: control.imageUrl,
            width: control.width,
            height: control.height
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswDigitalForm.invalid) {
            return;
        }
        this.aswDigitalForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswDigitalForm.value);
    }
}
