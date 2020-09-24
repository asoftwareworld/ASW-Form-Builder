import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'asw-edit-select',
  templateUrl: './edit-select.component.html',
  styleUrls: ['./edit-select.component.scss']
})
export class EditSelectComponent implements OnInit {

    status: boolean;
    option: any = {
        "key": "",
        "value": ""
    }

    constructor(public dialogRef: MatDialogRef<EditSelectComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit() {

     }

    onNoClick(): void {
        this.dialogRef.close();
    }

    addNewOption(): void {
        debugger;
        this.control.options.push(this.option);
    }
    removeOption(index: number): void {
        this.control.options.splice(index, 1);
    }

    onSubmit() {
        this.dialogRef.close(this.control);
    }

    onChange(event: any) {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }  
}
