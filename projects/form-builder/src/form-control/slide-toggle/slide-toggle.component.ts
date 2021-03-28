/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from './../common/constants';
import { AswConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { AswSlideToggleDialogComponent } from './slide-toggle-dialog.component';

@Component({
    selector: 'asw-slide-toggle',
    templateUrl: './slide-toggle.component.html'
})
export class AswSlideToggleComponent {

    constants: any = Constants;
    /**
     * SlideToggle control
     */
    @Input() control: any;

    /**
     * SlideToggle control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
    @Input() isPreviewTemplate = false;

    @Output() slidetoggleUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() slidetoggleDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteSlideToggleDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialogComponent, {
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
        const dialogRef = this.dialog.open(AswSlideToggleDialogComponent, {
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
