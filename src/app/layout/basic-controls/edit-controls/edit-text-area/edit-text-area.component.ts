import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/layout/common/constants';

@Component({
  selector: 'asw-edit-text-area',
  templateUrl: './edit-text-area.component.html',
  styleUrls: ['./edit-text-area.component.scss']
})
export class EditTextAreaComponent implements OnInit {
    constants: any = Constants;
    aswEditTextAreaForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditTextAreaComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditTextAreaForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            style: ['', [Validators.required]],
            maxlength: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired:[false]            
        });
    }

    editProperty(control: any): void {
        this.aswEditTextAreaForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
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
        if(this.aswEditTextAreaForm.invalid){
            return;
        }
        this.aswEditTextAreaForm.value['displayName'] = this.control.displayName;
        this.aswEditTextAreaForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswEditTextAreaForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
