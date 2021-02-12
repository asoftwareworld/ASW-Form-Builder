import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditDatepickerComponent } from '../../edit-controls/edit-datepicker/edit-datepicker.component';

@Component({
    selector: 'asw-datepicker',
    templateUrl: './datepicker.component.html'
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
    @Input() isPreviewTemplate = true;

    @Output() datepickerUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() datepickerDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete datepicker control based on control index
     * @param control datepicker control items
     * @param controlIndex datepicker control index
     */
      deleteDatepickerDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.datepickerDeleteEvent.emit(controlIndex);
            }
        });
    }

    editDatepickerDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(EditDatepickerComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.datepickerUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
