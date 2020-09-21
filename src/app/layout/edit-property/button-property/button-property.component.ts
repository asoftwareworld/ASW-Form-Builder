import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'asw-button-property',
  templateUrl: './button-property.component.html',
  styleUrls: ['./button-property.component.scss']
})
export class ButtonPropertyComponent implements OnInit {

    aswEditPropertyForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ButtonPropertyComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditPropertyForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            placeholder: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            color: [],
            buttonStyle: ['', [Validators.required]],
            isRequired:[false]
        });
    }

    editProperty(control: any): void {
        this.aswEditPropertyForm.setValue({
            tooltip: control.tooltip,
            placeholder: control.placeholder,
            name: control.name,
            type: control.type,
            color: control.color,
            buttonStyle: control.buttonStyle,
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
