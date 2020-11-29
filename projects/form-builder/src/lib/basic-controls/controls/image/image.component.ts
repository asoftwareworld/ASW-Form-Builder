import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { ImageUploadDialogComponent } from '../../edit-controls/image-upload-dialog/image-upload-dialog.component';

@Component({
    selector: 'asw-image',
    templateUrl: './image.component.html'
})
export class ImageComponent {

    constants: any = Constants;
    /**
     * Header control
     */
    @Input() control: any;

    /**
     * Header control index to help update or delete button from drop area
     */
    @Input() controlIndex: number;
	  @Input() isPreviewTemplate = true;

    @Output() imageUpdateEvent = new EventEmitter<{control: any, index: number}>();
    @Output() imageDeleteEvent = new EventEmitter<number>();
    imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    constructor(public dialog: MatDialog) { }

    /**
     *
     * @param control
     * @param controlIndex
     */
    deleteImageDialog(control: any, controlIndex: number): void {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
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
      const dialogRef = this.dialog.open(ImageUploadDialogComponent, {
        disableClose: true,
        width: '744px',
        data: control
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          this.imageUpdateEvent.emit({control: result, index: controlIndex});
        }
      });
    }
}
