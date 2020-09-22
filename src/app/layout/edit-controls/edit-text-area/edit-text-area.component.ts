import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'asw-edit-text-area',
  templateUrl: './edit-text-area.component.html',
  styleUrls: ['./edit-text-area.component.scss']
})
export class EditTextAreaComponent implements OnInit {

    aswEditPropertyForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditTextAreaComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditPropertyForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            placeholder: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            name: ['', [Validators.required]],
            style: ['', [Validators.required]],
            maxlength: ['', [Validators.required]],
            isRequired:[false]
        });
    }

    editProperty(control: any): void {
        this.aswEditPropertyForm.setValue({
            tooltip: control.tooltip,
            placeholder: control.placeholder,
            name: control.name,
            maxlength: control.maxlength,
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
