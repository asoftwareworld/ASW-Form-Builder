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
import { MultiSelectControl } from './multi-select-control';

@Component({
    selector: 'asw-multi-select-dialog',
    templateUrl: './multi-select-dialog.html'
})
export class AswMultiSelectDialog implements OnInit {
    constants: any = Constants;
    aswEditCheckboxForm: FormGroup;
    optionKeyMessage!: string;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswMultiSelectDialog>,
                @Inject(MAT_DIALOG_DATA) public control: MultiSelectControl) {
        this.aswEditCheckboxForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            style: ['', [Validators.required]],
            options: this.formBuilder.array([this.createOption()]),
            column: [],
            isRequired: [false]
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
            value: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(999)]],
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
        const value: string[] = [];
        this.aswEditCheckboxForm.value.options.forEach((element: any) => {
            if (element.isChecked) {
                value.push(element.key);
            }
        });
        this.aswEditCheckboxForm.value.value = value;
        this.aswEditCheckboxForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditCheckboxForm.value);
    }

    setValue(control: MultiSelectControl): void {
        this.aswEditCheckboxForm.patchValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            style: control.style,
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
