/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { CalculationControl } from './calculation-control';

@Component({
    selector: 'asw-calculation-dialog',
    templateUrl: './calculation-dialog.html'
})
export class AswCalculationDialog implements OnInit {
    constants: any = Constants;
    aswEditCalculationForm!: FormGroup;
    status!: boolean;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswCalculationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.data.control);
    }

    validateFormBuilder(): void {
        this.aswEditCalculationForm = this.formBuilder.group({
            tooltip: [],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            value: [{ value: '', disabled: true}],
            style: ['', [Validators.required]],
            column: [],
            customClass: [],
            operators: this.formBuilder.array([this.createOperator()]),
        });
    }

    editProperty(control: CalculationControl): void {
        this.aswEditCalculationForm.patchValue({
            tooltip: control.tooltip,
            label: control.label,
            customClass: control.customClass ?? '',
            value: control.value,
            column: control.column,
            style: control.style,
        });
    }

    get operators(): FormArray {
        return this.aswEditCalculationForm.get('operators') as FormArray;
    }

    createOperator(): FormGroup {
        return this.formBuilder.group({
            label: [],
            value: []
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditCalculationForm.invalid) {
            return;
        }
        this.aswEditCalculationForm.value.controlType = this.data.control.controlType;
        this.aswEditCalculationForm.value.placeholder = this.data.control.placeholder;
        this.dialogRef.close(this.aswEditCalculationForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
