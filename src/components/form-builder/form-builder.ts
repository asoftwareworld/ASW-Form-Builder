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
import { Constants, NotificationService, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';
import { AswJsonPreviewDialog } from '@asoftwareworld/form-builder/form-control/json-preview-dialog';
import { CHOICE_CONTROLS, DATE_AND_GPS_CONTROLS, DIGITAL_CONTROLS, OTHERS_CONTROLS, SIMPLE_CONTROLS } from './default-controls';

@Component({
    selector: 'asw-form-builder',
    templateUrl: './form-builder.html',
    styleUrls: ['./form-builder.scss']
})
export class AswFormBuilder implements OnInit, OnChanges {
    step = 0;
    constants: any = Constants;
    simpleControls: any[] = [];
    choiceControls: any[] = [];
    dateAndGpsControls: any[] = [];
    digitalControls: any[] = [];
    othersControls: any[] = [];
    formContainer: any[] = [];
    viewInitialized = false;
    @Input() uploadData: any[] = [];
    @Input() isShowPreviewButton = true;
    @Input() isShowJsonDataButton = true;
    @Input() isShowPublishButton = true;
    @Input() allowedTypes: 'number' | 'text' | 'all' = 'all'

    @Output() previewClick = new EventEmitter<any[]>();
    @Output() publishClick = new EventEmitter<any[]>();

    @Output() buttonClick = new EventEmitter<any[]>();
    @Output() aswModelChange = new EventEmitter<any>();

    constructor(
        public dialog: MatDialog,
        private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.simpleControls = this.showAllowedTypes(SIMPLE_CONTROLS);
        this.choiceControls = this.showAllowedTypes(CHOICE_CONTROLS);
        this.dateAndGpsControls = this.showAllowedTypes(DATE_AND_GPS_CONTROLS);
        this.digitalControls = this.showAllowedTypes(DIGITAL_CONTROLS);
        this.othersControls = this.showAllowedTypes(OTHERS_CONTROLS);
    }

    private showAllowedTypes(controls: any[]) {
        if (this.allowedTypes === 'all') return controls
        
        return controls.filter((control) => control.controlType.includes(this.allowedTypes))
    }

    setStep(index: number): void {
        this.step = index;
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

    buttonClicked(type: string): void {
        if (type === 'reset') {
            this.formContainer = ObjectUtils.resetForm(this.formContainer);
        } else {
            const data = ObjectUtils.validateForm(this.formContainer);
            if (!data.isFormValid) {
                this.notificationService.openNotification('Please fill in the following required fields.'
                    + ' \n \n' + data.labels.toString(), 'Close');
            } else {
                this.buttonClick.emit(this.formContainer);
            }
        }
    }

    onSelectionChange(control: any): void {
        this.aswModelChange.emit(control);
    }

    duplicateControl(control: any): void {
        const duplicatedControl = JSON.parse(JSON.stringify(control));
        if (duplicatedControl.controlType === 'fileupload') {
            duplicatedControl.value = [];
        } else if (duplicatedControl.controlType !== 'qr-code') {
            duplicatedControl.value = duplicatedControl.controlType === 'slide-toggle' ? false : '';
        }
        this.formContainer.push(duplicatedControl);
    }
}