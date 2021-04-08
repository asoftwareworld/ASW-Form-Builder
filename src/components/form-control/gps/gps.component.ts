/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialogComponent } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core/public-api';
import { AswGpsDialogComponent } from './gps-dialog.component';

@Component({
    selector: 'asw-gps',
    templateUrl: './gps.component.html'
})
export class AswGpsComponent {

    constants: any = Constants;
    /**
     * Button control
     */
    @Input() control: any;

    /**
     * Button control index to help update or delete gps from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() gpsUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() gpsDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    /**
     * Delete gps control based on control index
     * @param control gps control items
     * @param controlIndex gps control index
     */
    deleteGpsDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.gpsDeleteEvent.emit(controlIndex);
            }
        });
    }

    editGpsDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswGpsDialogComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.gpsUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
