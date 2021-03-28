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
import { Constants } from './../common/constants';

@Component({
  selector: 'asw-text-area-dialog',
  templateUrl: './text-area-dialog.component.html'
})
export class AswTextareaDialogComponent implements OnInit {
    constants: any = Constants;
    aswEditTextAreaForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswTextareaDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditTextAreaForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            value: ['', []],
            style: ['', [Validators.required]],
            maxlength: ['', [Validators.required,
                Validators.minLength(1),
                Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired: [false]
        });
    }

    editProperty(control: any): void {
        this.aswEditTextAreaForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            value: control.value,
            maxlength: control.maxlength,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditTextAreaForm.invalid){
            return;
        }
        this.aswEditTextAreaForm.value.displayName = this.control.displayName;
        this.aswEditTextAreaForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditTextAreaForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
