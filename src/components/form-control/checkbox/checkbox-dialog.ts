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
import { CheckboxControl } from './checkbox-control';

@Component({
    selector: 'asw-checkbox-dialog',
    templateUrl: './checkbox-dialog.html'
})
export class AswCheckboxDialog implements OnInit {
    constants: any = Constants;
    aswEditCheckboxForm: FormGroup;
    status!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswCheckboxDialog>,
        @Inject(MAT_DIALOG_DATA) public control: CheckboxControl) {
        this.aswEditCheckboxForm = this.formBuilder.group({
            customClass: [],
            tooltip: [''],
            label: ['', [Validators.required, Validators.minLength(4)]],
            options: this.formBuilder.array([this.createOption()]),
            isRequired: [false],
            column: []
        });
    }

    ngOnInit(): void {
        this.setValue(this.control);
    }

    get options(): FormArray {
        return this.aswEditCheckboxForm.get('options') as FormArray;
    }

    createOption(): FormGroup {
        return this.formBuilder.group({
            key: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
            value: ['', [Validators.required, Validators.minLength(1)]],
            isChecked: [false]
        });
    }

    addNewOption(): void {
        this.options.push(this.createOption());
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    removeOption(index: number): void {
        this.options.removeAt(index);
    }

    onSubmit(): void {
        if (this.aswEditCheckboxForm.invalid) {
            return;
        }
        this.aswEditCheckboxForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditCheckboxForm.value);
    }

    setValue(control: CheckboxControl): void {
        this.aswEditCheckboxForm.patchValue({
            customClass: control.customClass ?? '',
            tooltip: control.tooltip,
            label: control.label,
            isRequired: control.isRequired,
            column: control.column
        });
        const optionFormGroup = control.options.map((option: any) => this.formBuilder.group(option));
        const optionFormArray = this.formBuilder.array(optionFormGroup);
        this.aswEditCheckboxForm.setControl('options', optionFormArray);
    }

    onChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onKey(event: any, index: number): void {
        let isError = false;
        this.options.controls.filter((element, elementIndex) => {
            if (element.value.key === event.target.value && index !== elementIndex) {
                isError = true;
            }
        });
        if (isError) {
            this.options.controls[index].get('key')?.setErrors({ unique: true });
        }
    }
}
