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
import { DateControl } from './date-control';

@Component({
    selector: 'asw-datepicker-dialog',
    templateUrl: './datepicker-dialog.html'
})
export class AswDatepickerDialog implements OnInit {
    constants: any = Constants;
    aswDatepickerForm!: FormGroup;
    status!: boolean;
    disabled!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswDatepickerDialog>,
        @Inject(MAT_DIALOG_DATA) public control: DateControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswDatepickerForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            customClass: [],
            tooltip: [''],
            minDate: [''],
            maxDate: [''],
            label: ['', [Validators.required, Validators.minLength(2)]],
            value: [''],
            column: [],
            style: ['', [Validators.required]],
            isRequired: [false],
            isDisabled: [false],
        });
    }

    editProperty(control: DateControl): void {
        this.aswDatepickerForm.setValue({
            id: control.id,
            customClass: control.customClass ?? '',
            minDate: control.minDate ?? '',
            maxDate: control.maxDate ?? '',
            tooltip: control.tooltip,
            label: control.label,
            value: control.value ?? '',
            style: control.style,
            column: control.column,
            isRequired: control.isRequired,
            isDisabled: control.isDisabled ?? false
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.aswDatepickerForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswDatepickerForm.value);
    }

    onStatusChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onChange(event: any): void {
        this.disabled = event.checked ? true : false;
    }
}
