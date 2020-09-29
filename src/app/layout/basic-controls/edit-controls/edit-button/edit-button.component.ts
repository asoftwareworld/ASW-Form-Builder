import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'asw-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {

    aswEditPropertyForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditButtonComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditPropertyForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            label: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            color: [],
            style: ['', [Validators.required]],
            isRequired:[false]
        });
    }

    editProperty(control: any): void {
        this.aswEditPropertyForm.setValue({
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
        this.aswEditPropertyForm.value['displayName'] = this.control.displayName;
        this.aswEditPropertyForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswEditPropertyForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
