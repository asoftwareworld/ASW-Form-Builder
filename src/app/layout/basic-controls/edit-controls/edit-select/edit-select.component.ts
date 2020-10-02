import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Constants } from 'src/app/layout/common/constants';

@Component({
  selector: 'asw-edit-select',
  templateUrl: './edit-select.component.html'
})
export class EditSelectComponent implements OnInit {
    constants: any = Constants;
    status: boolean;
    name: string;
    label: string;
    tooltip: string;
    style: string;
    isRequired: boolean;
    options: any[] = [];
    model: any = {};
    isShowStyle: boolean = false;
    optionKeyMessage: string;
    
    constructor(public dialogRef: MatDialogRef<EditSelectComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit() {
        this.setValue(this.control);
     }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addNewOption(): void {
        var number = Math.floor((Math.random() * 100000) + 1);
        let key = 'option-' + number;
        let value = 'Option ' + number;
        this.options.push({key, value});
    }
    
    removeOption(index: number): void {
        this.options.splice(index, 1);
    }

    onSubmit(aswEditPropertyForm: NgForm) {
        if(aswEditPropertyForm.invalid) {
            return;
        }
        this.model.displayName = this.control.displayName;
        this.model.controlType = this.control.controlType;
        this.model.name = this.name;
        this.model.label = this.label;
        this.model.tooltip = this.tooltip;
        if(this.control.controlType === 'select' || this.control.controlType === 'multi-select') {
            this.model.style = this.style;
        }          
        this.model.isRequired = this.isRequired;
        this.model.options = this.options;
        this.dialogRef.close(this.model);
    }

    setValue(control: any) {
        this.name = control.name;
        this.label = control.label;
        this.tooltip = control.tooltip;
        if(control.controlType === 'select' || control.controlType === 'multi-select') {
            this.isShowStyle = true;
            this.style = control.style;
        }        
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

    onKey(event: any, index: number) {
        debugger;
        this.options.forEach((element, elementIndex)=> {
            if(element.key == event.target.value && index != elementIndex) {
                this.optionKeyMessage = this.constants.messages.optionKeyValidationMessage;
            }
        });
    }
}