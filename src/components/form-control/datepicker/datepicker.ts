/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { DateControl } from './date-control';
import { AswDatepickerDialog } from './datepicker-dialog';

@Component({
    selector: 'asw-datepicker',
    templateUrl: './datepicker.html'
})
export class AswDatepicker {

    constants: any = Constants;
    /**
     * Datepicker control
     */
    @Input() control: DateControl | null = null;

    /**
     * Datepicker control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() datepickerUpdateEvent = new EventEmitter<{ control: DateControl, index: number }>();
    @Output() datepickerDeleteEvent = new EventEmitter<number>();
    @Output() dateChange = new EventEmitter<DateControl>();
    @Output() duplicateControl = new EventEmitter<DateControl>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete datepicker control based on control index
     * @param control datepicker control items
     * @param controlIndex datepicker control index
     */
    deleteDatepickerDialog(control: DateControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.datepickerDeleteEvent.emit(controlIndex);
            }
        });
    }

    editDatepickerDialog(control: DateControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswDatepickerDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.datepickerUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    onDateChange(control: DateControl): void {
        this.dateChange.emit(control);
    }

    duplicateDatepickerControl(control: DateControl): void {
        this.duplicateControl.emit(control);
    }
}
