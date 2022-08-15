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
import { TextFieldControl } from './textfield-control';

@Component({
    selector: 'asw-textfield-dialog',
    templateUrl: './textfield-dialog.html'
})
export class AswTextFieldDialog implements OnInit {
    constants: any = Constants;
    aswEditTextFieldForm!: FormGroup;
    status!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswTextFieldDialog>,
        @Inject(MAT_DIALOG_DATA) public control: TextFieldControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditTextFieldForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            value: ['', []],
            style: ['', [Validators.required]],
            column: [''],
            pattern: [''],
            customClass: [''],
            customErrorMsg: [''],
            maxlength: ['', [Validators.required,
                Validators.minLength(1), Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            minlength: ['', [Validators.required,
                Validators.minLength(1), Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired: [false]
        });
    }

    editProperty(control: TextFieldControl): void {
        this.aswEditTextFieldForm.setValue({
            id: control.id,
            tooltip: control.tooltip,
            label: control.label,
            pattern: control.pattern ?? '',
            customClass: control.customClass ?? '',
            customErrorMsg: control.customErrorMsg ?? '',
            value: control.value,
            maxlength: control.maxlength,
            minlength: control.minlength,
            column: control.column,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditTextFieldForm.invalid) {
            return;
        }
        this.aswEditTextFieldForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditTextFieldForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
