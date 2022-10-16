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

@Component({
    selector: 'asw-text-dialog',
    templateUrl: './text-dialog.html'
})
export class AswTextDialog implements OnInit {
    constants: any = Constants;
    aswEditTextForm!: FormGroup;
    status!: boolean;
    disabled!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswTextDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditTextForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(2)]],
            value: ['', []],
            style: ['', [Validators.required]],
            column: [''],
            pattern: [''],
            customClass: [''],
            customErrorMsg: [''],
            maxlength: [''],
            minlength: ['', [Validators.required,
                Validators.minLength(1), Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired: [false],
            isDisabled: [false]
        });
    }

    editProperty(control: any): void {
        this.aswEditTextForm.setValue({
            id: control.id,
            tooltip: control.tooltip,
            label: control.label,
            pattern: control.pattern ?? '',
            customClass: control.customClass ?? '',
            customErrorMsg: control.customErrorMsg ?? '',
            value: control.value ?? '',
            maxlength: control.maxlength,
            minlength: control.minlength,
            column: control.column,
            style: control.style,
            isRequired: control.isRequired,
            isDisabled: control.isDisabled ?? false
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditTextForm.invalid) {
            return;
        }
        this.aswEditTextForm.value.controlType = this.control.controlType;
        this.aswEditTextForm.value.guid = this.control.guid;
        this.dialogRef.close(this.aswEditTextForm.value);
    }

    onStatusChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onChange(event: any): void {
        this.disabled = event.checked ? true : false;
    }
}
