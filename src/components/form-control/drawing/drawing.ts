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
import { AswDigitalDialog, Constants } from '@asoftwareworld/form-builder/form-control/core';
import { AswImageDrawing } from '@asoftwareworld/form-builder/image-drawing';

@Component({
    selector: 'asw-drawing',
    templateUrl: './drawing.html'
})
export class AswDrawing {

    constants: any = Constants;

    @Input() control: any;

    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() drawingUpdateEvent = new EventEmitter<{ control: any, index: number }>();
    @Output() drawingDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<any>();

    constructor(public dialog: MatDialog) { }

    deleteDrawingDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.drawingDeleteEvent.emit(controlIndex);
            }
        });
    }

    drawingImageDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswImageDrawing, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.drawingUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    editDrawingDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswDigitalDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.drawingUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    duplicateDrawingControl(control: any): void {
        this.duplicateControl.emit(control);
    }
}
