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
import { Constants, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-image-dialog',
    templateUrl: './image-dialog.html'
})
export class AswImageDialog implements OnInit {

    constants: any = Constants;
    aswImageForm!: FormGroup;
    objectUtils = ObjectUtils;

    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswImageDialog>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswImageForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(5)]],
            column: [],
            class: [],
            imageUrl: [],
            imageShape: [],
            height: ['', [Validators.max(600), Validators.min(0)]],
            width: ['', [Validators.max(600), Validators.min(0)]]
        });
    }

    editProperty(control: any): void {
        this.aswImageForm.setValue({
            label: control.label,
            class: control.class,
            column: control.column,
            imageUrl: control.imageUrl,
            imageShape: control.imageShape,
            width: control.width,
            height: control.height
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswImageForm.invalid){
            return;
        }
        this.aswImageForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswImageForm.value);
    }
}
