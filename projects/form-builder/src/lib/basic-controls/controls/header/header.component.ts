import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditHeaderComponent } from '../../edit-controls/edit-header/edit-header.component';

@Component({
    selector: 'asw-header',
    templateUrl: './header.component.html'
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
	@Input() isPreviewTemplate = true;

    @Output() headerUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() headerDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete header control based on control index
     * @param control header control items
     * @param controlIndex header control index
     */
	deleteHeaderDialog(control: any, controlIndex: number): void {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '350px',
			data: { name: control.label, message: this.constants.messages.waringMessage }
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result !== undefined) {
                this.headerDeleteEvent.emit(controlIndex);
			}
		});
	}

	/**
	 * Edit header control property and modify as per needed.
	 * @param control header control items
	 * @param controlIndex header control index
	 */
	editHeaderDialog(control: any, controlIndex: number): void {
		const dialogRef = this.dialog.open(EditHeaderComponent, {
			disableClose: true,
			width: '744px',
			data: control
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result !== undefined) {
				this.headerUpdateEvent.emit({control: result, index: controlIndex});
			}
		});
	}
}
