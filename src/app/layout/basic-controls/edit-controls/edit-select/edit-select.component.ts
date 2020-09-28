import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'asw-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.scss']
})
export class EditSelectComponent implements OnInit {

    status: boolean;
    name: string;
    label: string;
    tooltip: string;
    style: string;
    isRequired: boolean;
    options: any[] = [];
    model: any = {};
    option: any = {
        "key": "",
        "value": ""
    }

    constructor(public dialogRef: MatDialogRef<EditSelectComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit() {
        this.setValue(this.control);
     }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addNewOption(): void {
        this.options.push(this.option);
    }
    removeOption(index: number): void {
        this.options.splice(index, 1);
    }

    onSubmit(aswEditPropertyForm: NgForm) {
        this.model.displayName = this.control.displayName;
        this.model.controlType = this.control.controlType;
        this.model.name = this.name;
        this.model.label = this.label;
        this.model.tooltip = this.tooltip;
        this.model.style = this.style;
        this.model.isRequired = this.isRequired;
        this.model.options = this.options;
        this.dialogRef.close(this.model);
    }

    setValue(control: any) {
        this.name = control.name;
        this.label = control.label;
        this.tooltip = control.tooltip;
        this.style = control.style;
        this.isRequired = control.isRequired;
        control.options.forEach(element => {
            let key = element.key;
            let value = element.value;
            this.options.push({key, value});
        });
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
