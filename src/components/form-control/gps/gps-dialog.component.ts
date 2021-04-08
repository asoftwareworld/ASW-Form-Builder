/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-gps-dialog',
    templateUrl: './gps-dialog.component.html'
})
export class AswGpsDialogComponent implements OnInit {
    constants: any = Constants;
    aswEditGpsForm!: FormGroup;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswGpsDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditGpsForm = this.formBuilder.group({
            latitude: ['', []],
            longitude: ['', []],
            value: ['', []]
        });
    }

    editProperty(control: any): void {
        this.aswEditGpsForm.setValue({
            latitude: control.latitude,
            longitude: control.longitude,
            value: control.value
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditGpsForm.invalid) {
            return;
        }
        this.aswEditGpsForm.value.displayName = this.control.displayName;
        this.aswEditGpsForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditGpsForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
