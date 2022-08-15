/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { SlideToggleControl } from './slide-toggle-control';
import { AswSlideToggleDialog } from './slide-toggle-dialog';

@Component({
    selector: 'asw-slide-toggle',
    templateUrl: './slide-toggle.html'
})
export class AswSlideToggle {

    constants: any = Constants;
    /**
     * SlideToggle control
     */
    @Input() control: SlideToggleControl | null = null;

    /**
     * SlideToggle control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() slidetoggleUpdateEvent = new EventEmitter<{ control: SlideToggleControl, index: number }>();
    @Output() slidetoggleDeleteEvent = new EventEmitter<number>();
    @Output() selectionChange = new EventEmitter<SlideToggleControl>();
    @Output() duplicateControl = new EventEmitter<SlideToggleControl>();

    constructor(public dialog: MatDialog) { }

    deleteSlideToggleDialog(control: SlideToggleControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.slidetoggleDeleteEvent.emit(controlIndex);
            }
        });
    }

    editSlideToggleDialog(control: SlideToggleControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswSlideToggleDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.slidetoggleUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    onChange(event: MatSlideToggleChange, control: SlideToggleControl): void {
        control.value = event.checked;
        this.selectionChange.emit(control);
    }

    duplicateSlideToggleControl(control: SlideToggleControl): void {
        this.duplicateControl.emit(control);
    }
}
