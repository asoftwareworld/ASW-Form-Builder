import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../../../common/constants';

@Component({
  selector: 'asw-edit-text-box',
  templateUrl: './edit-text-box.component.html'
})
export class EditTextboxComponent implements OnInit {
    constants: any = Constants;
    aswEditTextboxForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditTextboxComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditTextboxForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
            type: ['', [Validators.required]],
            style: ['', [Validators.required]],
            maxlength: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern(this.constants.matchPattern.numberPattern)]],
            isRequired:[false]
        });
    }

    editProperty(control: any): void {
        this.aswEditTextboxForm.setValue({
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            type: control.type,
            maxlength: control.maxlength,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        if(this.aswEditTextboxForm.invalid) {
            return;
        }
        this.aswEditTextboxForm.value['displayName'] = this.control.displayName;
        this.aswEditTextboxForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswEditTextboxForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
