/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { AswJsonPreviewDialog } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
import { CONTROLS } from './default-controls';

@Component({
    selector: 'asw-form-builder',
    templateUrl: './form-builder.html',
    styleUrls: ['./form-builder.scss']
})
export class AswFormBuilder implements OnInit, OnChanges {
    constants: any = Constants;
    availableControls: any[] = [];
    formContainer: any[] = [];
    viewInitialized = false;
    @Input() uploadData: any[] = [];
    @Input() isShowPreviewButton = true;
    @Input() isShowJsonDataButton = true;
    @Input() isShowPublishButton = true;

    @Output() previewClick = new EventEmitter<any[]>();
    @Output() publishClick = new EventEmitter<any[]>();

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
        this.availableControls = CONTROLS;
    }

    ngOnChanges(): void {
        if (this.uploadData.length) {
            this.formContainer = this.uploadData;
        }
    }

    drop(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(JSON.parse(JSON.stringify(event.previousContainer.data)),
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    updatedControl(data: any): void {
        this.formContainer.splice(data.index, 1, data.control);
    }

    deleteControl(index: any): void {
        this.formContainer.splice(index, 1);
    }

    previewTemplate(): void {
        this.previewClick.emit(this.formContainer);
    }

    previewJsonData(): void {
        const dialogRef = this.dialog.open(AswJsonPreviewDialog, {
            disableClose: true,
            width: '744px',
            data: this.formContainer
        });
        dialogRef.afterClosed();
    }

    publishTemplate(): void {
        this.publishClick.emit(this.formContainer);
    }
}
