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
import { AswImageUploadDialog } from './image-upload-dialog';

@Component({
  selector: 'asw-image',
  templateUrl: './image.html'
})
export class AswImage {

  constants: any = Constants;

  @Input() control: any;

  @Input() controlIndex!: number;
  @Input() isPreviewTemplate = false;

  @Output() imageUpdateEvent = new EventEmitter<{ control: any, index: number }>();
  @Output() imageDeleteEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  deleteImageDialog(control: any, controlIndex: number): void {
    const dialogRef = this.dialog.open(AswConfirmDialog, {
      width: '350px',
      data: { name: control.label, message: this.constants.messages.waringMessage }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.imageDeleteEvent.emit(controlIndex);
      }
    });
  }

  editImageDialog(control: any, controlIndex: number): void {
    const dialogRef = this.dialog.open(AswImageUploadDialog, {
      disableClose: true,
      width: '744px',
      data: control
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.imageUpdateEvent.emit({ control: result, index: controlIndex });
      }
    });
  }
}
