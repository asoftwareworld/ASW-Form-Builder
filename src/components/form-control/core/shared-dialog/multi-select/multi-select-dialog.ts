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
import { Constants } from '../../constant/constants';

@Component({
    selector: 'asw-multi-select-dialog',
    templateUrl: './multi-select-dialog.html'
})
export class AswMultiSelectDialog implements OnInit {
    constants: any = Constants;
    aswEditMultiselectForm: FormGroup;
    status!: boolean;
    disabled!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswMultiSelectDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) {
        this.aswEditMultiselectForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            customClass: [],
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(2)]],
            style: [''],
            options: this.formBuilder.array([this.createOption()]),
            column: [],
            isRequired: [false],
            isDisabled: [false]
        });
    }

    ngOnInit(): void {
        this.setValue(this.control);
    }

    get options(): FormArray {
        return this.aswEditMultiselectForm.get('options') as FormArray;
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
        if (this.aswEditMultiselectForm.invalid) {
            return;
        }
        const value: string[] = [];
        this.aswEditMultiselectForm.value.options.forEach((element: any) => {
            if (element.isChecked) {
                value.push(element.key);
            }
        });
        this.aswEditMultiselectForm.value.value = value;
        this.aswEditMultiselectForm.value.controlType = this.control.controlType;
        this.aswEditMultiselectForm.value.guid = this.control.guid;
        this.dialogRef.close(this.aswEditMultiselectForm.value);
    }

    setValue(control: any): void {
        this.aswEditMultiselectForm.patchValue({
            id: control.id,
            customClass: control.customClass ?? '',
            tooltip: control.tooltip,
            label: control.label,
            style: control.style,
            isRequired: control.isRequired,
            column: control.column,
            value: control.value ?? '',
            isDisabled: control.isDisabled ?? false
        });
        const optionFormGroup = control.options.map((option: any) => this.formBuilder.group(option));
        const optionFormArray = this.formBuilder.array(optionFormGroup);
        this.aswEditMultiselectForm.setControl('options', optionFormArray);
    }

    onStatusChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onChange(event: any): void {
        this.disabled = event.checked ? true : false;
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
