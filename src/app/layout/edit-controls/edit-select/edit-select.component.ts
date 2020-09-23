import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'asw-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.scss']
})
export class EditSelectComponent implements OnInit {

    aswEditPropertyForm: FormGroup;
    status: boolean;
    options = [];

    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditSelectComponent>,
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
            style: ['', [Validators.required]],
            options: this.formBuilder.array(this.control.options),
            isRequired: [false]
        });
        this.options = this.control.options;
    }

    editProperty(control: any): void {
        debugger;
        this.aswEditPropertyForm.setValue({
            tooltip: control.tooltip,
            placeholder: control.placeholder,
            name: control.name,
            style: control.style,
            options: control.options.array.forEach(element => {
                let key = element.key;
                let value = element.value
            }),
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
