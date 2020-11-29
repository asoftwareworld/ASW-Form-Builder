import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../../../common/constants';

@Component({
  selector: 'asw-edit-datepicker',
  templateUrl: './edit-datepicker.component.html'
})
export class EditDatepickerComponent implements OnInit {
    constants: any = Constants;
    aswDatepickerForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<EditDatepickerComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswDatepickerForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            value: ['', []],
            style: ['', [Validators.required]],
            isRequired: [false]
        });
    }

    editProperty(control: any): void {
        this.aswDatepickerForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            value: control.value,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.aswDatepickerForm.value.displayName = this.control.displayName;
        this.aswDatepickerForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswDatepickerForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
