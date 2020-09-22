import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from './../../../common/constants';
import { ConfirmDialogComponent } from './../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditTextboxComponent } from './../../../edit-controls/edit-text-box/edit-text-box.component';

@Component({
    selector: 'asw-text-box',
    templateUrl: './text-box.component.html',
    styleUrls: ['./text-box.component.scss']
})
export class TextboxComponent {

    constants: any = Constants;
    /**
     * Textbox control
     */
    @Input() control: any;

    /**
     * Textbox control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;

    @Output() textboxUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() textboxDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
  	deleteTextboxDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {            
			if(result != undefined) {
                this.textboxDeleteEvent.emit(controlIndex);
			}
		});
	}

	editTextboxDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditTextboxComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.textboxUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
