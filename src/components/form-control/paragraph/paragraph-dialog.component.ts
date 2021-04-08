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
  selector: 'asw-paragraph-dialog',
  templateUrl: './paragraph-dialog.component.html'
})
export class AswParagraphDialogComponent implements OnInit {
    constants: any = Constants;
    aswParagraphForm!: FormGroup;
    status!: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<AswParagraphDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswParagraphForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(4)]],
            subtype: [],
            style: []
        });
    }

    editProperty(control: any): void {
        this.aswParagraphForm.setValue({
            label: control.label,
            subtype: control.subtype,
            style: control.style
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswParagraphForm.invalid){
            return;
        }
        this.aswParagraphForm.value.displayName = this.control.displayName;
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
