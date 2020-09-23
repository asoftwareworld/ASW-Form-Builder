import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/layout/common/constants';
import { EditDatepickerComponent } from 'src/app/layout/edit-controls/edit-datepicker/edit-datepicker.component';
import { ConfirmDialogComponent } from 'src/app/layout/shared-components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'asw-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

    constants: any = Constants;
    /**
     * Datepicker control
     */
    @Input() control: any;

    /**
     * Datepicker control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;

    @Output() datepickerUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() datepickerDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
  	deleteDatepickerDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {            
			if(result != undefined) {
                this.datepickerDeleteEvent.emit(controlIndex);
			}
		});
	}

	editDatepickerDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditDatepickerComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.datepickerUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
