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
import { SlideToggleControl } from './slide-toggle-control';

@Component({
    selector: 'asw-slide-toggle-dialog',
    templateUrl: './slide-toggle-dialog.html'
})
export class AswSlideToggleDialog implements OnInit {
    constants: any = Constants;
    aswEditSlideToggleForm!: FormGroup;
    status!: boolean;
    disabled!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswSlideToggleDialog>,
        @Inject(MAT_DIALOG_DATA) public control: SlideToggleControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditSlideToggleForm = this.formBuilder.group({
            customClass: [],
            label: ['', [Validators.required, Validators.minLength(1)]],
            color: [],
            value: [false],
            column: [],
            isRequired: [false],
            isDisabled: [false]
        });
    }

    editProperty(control: SlideToggleControl): void {
        this.aswEditSlideToggleForm.setValue({
            customClass: control.customClass ?? '',
            label: control.label,
            color: control.color,
            column: control.column,
            value: control.value ? true : false,
            isRequired: control.isRequired,
            isDisabled: control.isDisabled ?? false
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditSlideToggleForm.invalid) {
            return;
        }
        this.aswEditSlideToggleForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditSlideToggleForm.value);
    }

    onStatusChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onChange(event: any): void {
        this.disabled = event.checked ? true : false;
    }
}
