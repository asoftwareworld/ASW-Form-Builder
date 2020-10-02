import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/layout/common/constants';
import { EditSelectComponent } from 'src/app/layout/basic-controls/edit-controls/edit-select/edit-select.component';
import { ConfirmDialogComponent } from 'src/app/layout/shared-components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'asw-radio-button',
    templateUrl: './radio-button.component.html'
})
export class RadioButtonComponent {

    constants: any = Constants;
    /**
     * RadioButton control
     */
    @Input() control: any;

    /**
     * RadioButton control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
	@Input() isPreviewTemplate: boolean = true;
	
    @Output() radioButtonUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() radioButtonDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
  	deleteRadioButtonDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.name, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {            
			if(result != undefined) {
                this.radioButtonDeleteEvent.emit(controlIndex);
			}
		});
	}

	editRadioButtonDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditSelectComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.radioButtonUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
