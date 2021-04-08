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


@Component({
    selector: 'asw-button-dialog',
    templateUrl: './button-dialog.component.html'
})
export class AswButtonDialogComponent implements OnInit {
    constants: any = Constants;
    aswEditButtonForm!: FormGroup;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswButtonDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditButtonForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            type: ['', [Validators.required]],
            color: [],
            style: ['', [Validators.required]],
            isRequired: [false]
        });
    }

    editProperty(control: any): void {
        this.aswEditButtonForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            type: control.type,
            color: control.color,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditButtonForm.invalid) {
            return;
        }
        this.aswEditButtonForm.value.displayName = this.control.displayName;
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
