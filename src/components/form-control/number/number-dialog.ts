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
import { Constants, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';
import { NumberControl } from './number-control';

@Component({
    selector: 'asw-number-dialog',
    templateUrl: './number-dialog.html'
})
export class AswNumberDialog implements OnInit {
    decimals = 100;
    constants: any = Constants;
    aswEditNumberForm!: FormGroup;
    status!: boolean;
    objectUtils = ObjectUtils;
    disabled!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswNumberDialog>,
        @Inject(MAT_DIALOG_DATA) public control: NumberControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditNumberForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(2)]],
            value: ['', []],
            style: ['', [Validators.required]],
            column: [''],
            customClass: [''],
            maxlength: [''],
            minlength: ['', [Validators.required,
                Validators.minLength(1), Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired: [false],
            isDisabled: [false]
        });
    }

    editProperty(control: NumberControl): void {
        this.aswEditNumberForm.setValue({
            id: control.id,
            tooltip: control.tooltip,
            label: control.label,
            customClass: control.customClass ?? '',
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
        if (this.aswEditNumberForm.invalid) {
            return;
        }
        this.aswEditNumberForm.value.controlType = this.control.controlType;
        this.aswEditNumberForm.value.guid = this.control.guid;
        this.dialogRef.close(this.aswEditNumberForm.value);
    }

    onStatusChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onChange(event: any): void {
        this.disabled = event.checked ? true : false;
    }
}
