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
import { ButtonControl } from './button-control';

@Component({
    selector: 'asw-button-dialog',
    templateUrl: './button-dialog.html'
})
export class AswButtonDialog implements OnInit {
    constants: any = Constants;
    aswEditButtonForm!: FormGroup;
    status!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswButtonDialog>,
        @Inject(MAT_DIALOG_DATA) public control: ButtonControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditButtonForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            customClass: [],
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            type: ['', [Validators.required]],
            color: [],
            column: [],
            style: ['', [Validators.required]]
        });
    }

    editProperty(control: ButtonControl): void {
        this.aswEditButtonForm.setValue({
            id: control.id,
            customClass: control.customClass ?? '',
            tooltip: control.tooltip,
            label: control.label,
            type: control.type,
            color: control.color,
            style: control.style,
            column: control.column
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditButtonForm.invalid) {
            return;
        }
        this.aswEditButtonForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditButtonForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
