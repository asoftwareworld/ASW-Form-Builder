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
import { MatRadioChange } from '@angular/material/radio';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { AutoCompleteControl } from './autocomplete-control';

@Component({
    selector: 'asw-autocomplete-dialog',
    templateUrl: './autocomplete-dialog.html'
})
export class AswAutocompleteDialog implements OnInit {
    constants: any = Constants;
    aswEditRadioButtonForm: FormGroup;
    optionKeyMessage!: string;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswAutocompleteDialog>,
                @Inject(MAT_DIALOG_DATA) public control: AutoCompleteControl) {
        this.aswEditRadioButtonForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            style: ['', [Validators.required]],
            options: this.formBuilder.array([this.createOption()]),
            isRequired: [false]
        });
    }

    ngOnInit(): void {
        this.setValue(this.control);
    }

    get options(): FormArray {
        return this.aswEditRadioButtonForm.get('options') as FormArray;
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
        if (this.aswEditRadioButtonForm.invalid) {
            return;
        }
        this.aswEditRadioButtonForm.value.options.forEach((element: any) => {
            if (element.isChecked) {
                this.aswEditRadioButtonForm.value.value = element.key;
            }
        });
        this.aswEditRadioButtonForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditRadioButtonForm.value);
    }

    setValue(control: AutoCompleteControl): void {
        this.aswEditRadioButtonForm.patchValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            style: control.style,
            value: control.value,
            isRequired: control.isRequired
        });
        const optionFormGroup = control.options.map((option: any) => this.formBuilder.group(option));
        const optionFormArray = this.formBuilder.array(optionFormGroup);
        this.aswEditRadioButtonForm.setControl('options', optionFormArray);
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

    radioChange(event: MatRadioChange): void {
        this.options.controls.filter((element) => {
            element.value.isChecked = element.value.key === event.value ? true : false;
        });
        const optionFormGroup = this.options.controls.map((option: any) => this.formBuilder.group(option.value));
        const optionFormArray = this.formBuilder.array(optionFormGroup);
        this.aswEditRadioButtonForm.setControl('options', optionFormArray);
    }
}
