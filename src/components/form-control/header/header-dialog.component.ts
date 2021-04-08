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
  selector: 'asw-header-dialog',
  templateUrl: './header-dialog.component.html'
})
export class AswHeaderDialogComponent implements OnInit {
    constants: any = Constants;
    aswHeaderForm!: FormGroup;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswHeaderDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswHeaderForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(5)]],
            subtype: [],
            style: []
        });
    }

    editProperty(control: any): void {
        this.aswHeaderForm.setValue({
            label: control.label,
            subtype: control.subtype,
            style: control.style
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswHeaderForm.invalid){
            return;
        }
        this.aswHeaderForm.value.displayName = this.control.displayName;
        this.aswHeaderForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswHeaderForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
