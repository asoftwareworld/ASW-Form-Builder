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
import { TextboxControl } from './textbox-control';

@Component({
  selector: 'asw-textbox-dialog',
  templateUrl: './textbox-dialog.html'
})
export class AswTextboxDialog implements OnInit {
    constants: any = Constants;
    aswEditTextboxForm!: FormGroup;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswTextboxDialog>,
                @Inject(MAT_DIALOG_DATA) public control: TextboxControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditTextboxForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
            value: ['', []],
            style: ['', [Validators.required]],
            maxlength: ['', [Validators.required,
                Validators.minLength(1), Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            minlength: ['', [Validators.required,
                Validators.minLength(1), Validators.maxLength(3),
                Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired: [false]
        });
    }

    editProperty(control: TextboxControl): void {
        this.aswEditTextboxForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            value: control.value,
            maxlength: control.maxlength,
            minlength: control.minlength,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditTextboxForm.invalid) {
            return;
        }
        this.aswEditTextboxForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditTextboxForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
