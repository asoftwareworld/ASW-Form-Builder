import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from 'src/app/layout/common/constants';
import { EditHeaderComponent } from 'src/app/layout/basic-controls/edit-controls/edit-header/edit-header.component';
import { ConfirmDialogComponent } from 'src/app/layout/shared-components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'asw-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constants: any = Constants;
    /**
     * Header control
     */
    @Input() control: any;

    /**
     * Header control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
	@Input() isPreviewTemplate: boolean = true;
	
    @Output() headerUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() headerDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }
    
    /**
     * 
     * @param control 
     * @param controlIndex 
     */
	deleteHeaderDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.label, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {  
			if(result != undefined) {
                this.headerDeleteEvent.emit(controlIndex);
			}
		});
	}

	editHeaderDialog(control: any, controlIndex: number): void {
		let dialogRef = this.dialog.open(EditHeaderComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined) {
				this.headerUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
