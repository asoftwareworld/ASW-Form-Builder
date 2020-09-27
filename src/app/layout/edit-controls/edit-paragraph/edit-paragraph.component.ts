import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../../common/constants';

@Component({
  selector: 'asw-edit-paragraph',
  templateUrl: './edit-paragraph.component.html',
  styleUrls: ['./edit-paragraph.component.scss']
})
export class EditParagraphComponent implements OnInit {
    constants: any = Constants;
    aswParagraphForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditParagraphComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(){
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswParagraphForm = this.formBuilder.group({
            label: ['', [Validators.required, Validators.minLength(5)]],
            subtype: [],
            style: []
        });
    }

    editProperty(control: any): void {
        this.aswParagraphForm.setValue({
            label: control.label,
            subtype: control.subtype,
            style: control.style
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit() {
        this.aswParagraphForm.value['displayName'] = this.control.displayName;
        this.aswParagraphForm.value['controlType'] = this.control.controlType;
        this.dialogRef.close(this.aswParagraphForm.value);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
