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
import { ParagraphControl } from './paragraph-control';

@Component({
    selector: 'asw-paragraph-dialog',
    templateUrl: './paragraph-dialog.html'
})
export class AswParagraphDialog implements OnInit {
    constants: any = Constants;
    aswParagraphForm!: FormGroup;
    status!: boolean;
    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AswParagraphDialog>,
        @Inject(MAT_DIALOG_DATA) public control: ParagraphControl) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswParagraphForm = this.formBuilder.group({
            customClass: [''],
            label: ['', [Validators.required, Validators.minLength(4)]],
            subtype: [],
            style: [],
            column: []
        });
    }

    editProperty(control: ParagraphControl): void {
        this.aswParagraphForm.setValue({
            label: control.label,
            customClass: control.customClass ?? '',
            subtype: control.subtype,
            style: control.style,
            column: control.column
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswParagraphForm.invalid) {
            return;
        }
        this.aswParagraphForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswParagraphForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
