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
    optionKeyMessage!: string;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswCheckboxDialog>,
                @Inject(MAT_DIALOG_DATA) public control: CheckboxControl) {
                    this.aswEditCheckboxForm = this.formBuilder.group({
                        tooltip: ['', [Validators.required]],
                        label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
                        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
                        options: this.formBuilder.array([this.createOption()]),
                        isRequired: [false]
                    });
                }

    ngOnInit(): void {
        this.setValue(this.control);
    }

    get options(): FormArray {
        return this.aswEditCheckboxForm.get('options') as FormArray;
    }

    validateFormBuilder(): void {
        this.aswEditCheckboxForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            options: this.formBuilder.array([this.createOption()]),
            isRequired: [false]
        });
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
        this.aswEditCheckboxForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditCheckboxForm.value);
    }

    setValue(control: any): void {
        this.aswEditCheckboxForm.patchValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            isRequired: control.isRequired
        });
        const optionFormGroup = control.options.map((option: any) => this.formBuilder.group(option));
        const optionFormArray = this.formBuilder.array(optionFormGroup);
        this.aswEditCheckboxForm.setControl('options', optionFormArray);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }

    onKey(event: any, index: number): void {
        debugger;
        this.options.controls.filter((element, elementIndex) => {
            if (element.value.key === event.target.value && index !== elementIndex) {
                this.optionKeyMessage = this.constants.messages.optionKeyValidationMessage;
            }
        });
    }

    // customGroupValidation(formArray) {
    //     let isError = false;
    //     var result = _.groupBy( formArray.controls , c => c.value );
    //     for (let prop in result) {
    //         if (result[prop].length > 1) {
    
    //             isError = true;
    //             _.forEach(result[prop], function (item:FormControl) {
    //                 item._status = "INVALID";
    //             });
    //         } else {
    //             result[prop][0]._status = 'VALID';           
    //         }
    //     }
    //     if(isError){ return {'duplicate':'duplicate entries'}}
    // }
}
