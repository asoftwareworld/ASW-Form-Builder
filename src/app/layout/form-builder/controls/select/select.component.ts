import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditSelectComponent } from '../../../edit-controls/edit-select/edit-select.component';

@Component({
    selector: 'asw-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {

    constants: any = Constants;
    /**
     * Textbox control
     */
    @Input() control: any;

    /**
     * Textbox control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;

    @Output() selectUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() selectDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
  	deleteSelectDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {            
			if(result != undefined) {
                this.selectDeleteEvent.emit(controlIndex);
			}
		});
	}

	editSelectDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditSelectComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.selectUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
