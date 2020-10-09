import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'asw-json-preview-dialog',
    templateUrl: './json-preview-dialog.component.html',
})
export class JsonPreviewDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<JsonPreviewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}