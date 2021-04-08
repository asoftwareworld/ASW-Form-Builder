/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '../constant/constants';

@Component({
  selector: 'asw-select-dialog',
  templateUrl: './select-dialog.component.html'
})
export class AswSelectDialogComponent implements OnInit {
    constants: any = Constants;
    status!: boolean;
    name!: string;
    label!: string;
    tooltip!: string;
    style!: string;
    isRequired!: boolean;
    options: any[] = [];
    model: any = {};
    isShowStyle = false;
    optionKeyMessage!: string;

    constructor(public dialogRef: MatDialogRef<AswSelectDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.setValue(this.control);
     }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addNewOption(): void {
        const uniqueNumber = Math.floor((Math.random() * 100000) + 1);
        const key = 'option-' + uniqueNumber;
        const value = 'Option ' + uniqueNumber;
        this.options.push({key, value});
    }

    removeOption(index: number): void {
        this.options.splice(index, 1);
    }

    onSubmit(aswEditPropertyForm: NgForm): void {
        if (aswEditPropertyForm.invalid) {
            return;
        }
        this.model.displayName = this.control.displayName;
        this.model.controlType = this.control.controlType;
        this.model.name = this.name;
        this.model.label = this.label;
        this.model.tooltip = this.tooltip;
        if (this.control.controlType !== 'radio' || this.control.controlType !== 'checkbox') {
            this.model.style = this.style;
        }
        this.model.isRequired = this.isRequired;
        this.model.options = this.options;
        this.dialogRef.close(this.model);
    }

    setValue(control: any): void {
        this.name = control.name;
        this.label = control.label;
        this.tooltip = control.tooltip;
        if (control.controlType !== 'radio' || control.controlType !== 'checkbox') {
            this.isShowStyle = true;
            this.style = control.style;
        }
        this.isRequired = control.isRequired;
        control.options.forEach((element: any) => {
            const key = element.key;
            const value = element.value;
            this.options.push({key, value});
        });
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }

    onKey(event: any, index: number): void {
        this.options.forEach((element, elementIndex) => {
            if (element.key === event.target.value && index !== elementIndex) {
                this.optionKeyMessage = this.constants.messages.optionKeyValidationMessage;
            }
        });
    }
}
