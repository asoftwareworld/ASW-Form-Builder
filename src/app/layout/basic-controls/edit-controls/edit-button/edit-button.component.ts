import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/layout/common/constants';

@Component({
  selector: 'asw-edit-button',
  templateUrl: './edit-button.component.html'
})
export class EditButtonComponent implements OnInit {
    constants: any = Constants;
    aswEditButtonForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditButtonComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditButtonForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            type: ['', [Validators.required]],
            color: [],
            style: ['', [Validators.required]],
            isRequired:[false]
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

    onSubmit() {
        if(this.aswEditButtonForm.invalid) {
            return;
        }
        this.aswEditButtonForm.value['displayName'] = this.control.displayName;
        this.aswEditButtonForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswEditButtonForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
