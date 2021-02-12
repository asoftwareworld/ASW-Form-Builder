import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditSlideToggleComponent } from '../../edit-controls/edit-slide-toggle/edit-slide-toggle.component';

@Component({
    selector: 'asw-slide-toggle',
    templateUrl: './slide-toggle.component.html'
})
export class SlideToggleComponent {

    constants: any = Constants;
    /**
     * SlideToggle control
     */
    @Input() control: any;

    /**
     * SlideToggle control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
    @Input() isPreviewTemplate = true;

    @Output() slidetoggleUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() slidetoggleDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteSlideToggleDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: { name: control.label, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.slidetoggleDeleteEvent.emit(controlIndex);
            }
        });
    }

    editSlideToggleDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(EditSlideToggleComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.slidetoggleUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
