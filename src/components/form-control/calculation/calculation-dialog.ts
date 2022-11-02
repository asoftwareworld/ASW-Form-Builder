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
import { MatSelectChange } from '@angular/material/select';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { CalculationControl, Operation } from './calculation-control';

@Component({
    selector: 'asw-calculation-dialog',
    templateUrl: './calculation-dialog.html'
})
export class AswCalculationDialog implements OnInit {
    constants: any = Constants;
    aswEditCalculationForm!: FormGroup;

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
            value: [{ value: '', disabled: true }],
            style: ['', [Validators.required]],
            column: [],
            customClass: [],
            operations: this.formBuilder.array([this.createOperations()]),
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
        const operationFormGroup = control.operations.map((operation: any) => this.formBuilder.group(operation));
        const operationFormArray = this.formBuilder.array(operationFormGroup);
        this.aswEditCalculationForm.setControl('operations', operationFormArray);
    }

    get operations(): FormArray {
        return this.aswEditCalculationForm.get('operations') as FormArray;
    }

    createOperations(): FormGroup {
        return this.formBuilder.group({
            id: [],
            label: [],
            value: [],
            operationValue: ['', [Validators.required]],
            control: ['']
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addNewOperation(): void {
        this.operations.push(this.createOperations());
    }

    removeOperation(index: number): void {
        this.operations.removeAt(index);
    }

    onSubmit(): void {
        if (this.aswEditCalculationForm.invalid) {
            return;
        }
        this.aswEditCalculationForm.value.controlType = this.data.control.controlType;
        this.aswEditCalculationForm.value.placeholder = this.data.control.placeholder;
        this.aswEditCalculationForm.value.operations.forEach((operation: Operation) => {
            operation.id = operation.control.guid;
            operation.label = operation.control.label;
            operation.value = operation.control.value;
        });
        this.dialogRef.close(this.aswEditCalculationForm.value);
    }

    onOperationChange(event: MatSelectChange, operation: any): void {
        if (event.value === 'x̄') {
            operation.controls.label.setErrors(null);
        } else {
            operation.controls.label.setValidators(Validators.required);
        }
    }

    onOperatorChange(event: MatSelectChange, operator: any): void {
        this.data.numberControls.forEach((operation: any) => {
            if (event.value === operation.label) {
                operator.value.id = operation.guid;
                operator.value.control = operation;
            }
        });
    }
}
