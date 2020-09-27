import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../../common/constants';

@Component({
  selector: 'asw-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.scss']
})
export class EditHeaderComponent implements OnInit {
    constants: any = Constants;
    aswHeaderForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditHeaderComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswHeaderForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(25)]],
            subtype: [],
            style: []
        });
    }

    editProperty(control: any): void {
        this.aswHeaderForm.setValue({
            label: control.label,
            subtype: control.subtype,
            style: control.style
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        this.aswHeaderForm.value['displayName'] = this.control.displayName;
        this.aswHeaderForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswHeaderForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
