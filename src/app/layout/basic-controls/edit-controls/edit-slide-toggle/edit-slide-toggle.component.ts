import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/layout/common/constants';

@Component({
  selector: 'asw-edit-slide-toggle',
  templateUrl: './edit-slide-toggle.component.html',
  styleUrls: ['./edit-slide-toggle.component.scss']
})
export class EditSlideToggleComponent implements OnInit {
    constants: any = Constants;
    aswEditSlideToggleForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditSlideToggleComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditSlideToggleForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
            color: [],
            isRequired:[false]
        });
    }

    editProperty(control: any): void {
        this.aswEditSlideToggleForm.setValue({
            label: control.label,
            color: control.color,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        if(this.aswEditSlideToggleForm.invalid){
            return;
        }
        this.aswEditSlideToggleForm.value['displayName'] = this.control.displayName;
        this.aswEditSlideToggleForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswEditSlideToggleForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
