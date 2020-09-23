import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/layout/common/constants';
import { EditSelectComponent } from 'src/app/layout/edit-controls/edit-select/edit-select.component';
import { ConfirmDialogComponent } from 'src/app/layout/shared-components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'asw-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {

    constants: any = Constants;
    /**
     * MultiSelect control
     */
    @Input() control: any;

    /**
     * MultiSelect control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;

    @Output() multiSelectUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() multiSelectDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
  	deleteMultiSelectDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {            
			if(result != undefined) {
                this.multiSelectDeleteEvent.emit(controlIndex);
			}
		});
	}

	editMultiSelectDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditSelectComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.multiSelectUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
