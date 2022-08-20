/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { FileUploadControl } from './fileupload-control';

@Component({
    selector: 'asw-fileupload',
    templateUrl: './fileupload.html',
    styleUrls: ['./fileupload.scss']
})
export class AswFileUpload {
    constants: any = Constants;

    @Input() control: any;

    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() fileUploadUpdateEvent = new EventEmitter<{ control: FileUploadControl, index: number }>();
    @Output() fileUploadDeleteEvent = new EventEmitter<number>();
    @Output() duplicateControl = new EventEmitter<any>();

    constructor(public dialog: MatDialog) { }
    /**
     * on file drop handler
     */
    onFileDropped(event: any): void {
        this.prepareFilesList(event);
    }

    /**
     * handle file from browsing
     */
    fileBrowseHandler(event: any): void {
        this.prepareFilesList(event.target?.files);
    }

    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index: number): void {
        this.control.value.splice(index, 1);
    }

    /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index: number): void {
        setTimeout(() => {
            if (index === this.control.value.length) {
                return;
            } else {
                const progressInterval = setInterval(() => {
                    if (this.control.value[index].progress === 100) {
                        clearInterval(progressInterval);
                        this.uploadFilesSimulator(index + 1);
                    } else {
                        this.control.value[index].progress += 5;
                    }
                }, 200);
            }
        }, 1000);
    }

    /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
    prepareFilesList(files: Array<any>): void {
        for (const item of files) {
            item.progress = 0;
            this.control.value.push(item);
        }
        this.uploadFilesSimulator(0);
    }

    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes: any, decimals: any): any {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    deleteFileUploadDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.fileUploadDeleteEvent.emit(controlIndex);
            }
        });
    }

    duplicateFileUploadControl(control: any): void {
        this.duplicateControl.emit(control);
    }
}
