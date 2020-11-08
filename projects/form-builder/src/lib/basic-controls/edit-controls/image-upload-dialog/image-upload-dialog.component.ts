import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from '../../../common/constants';
import { Dimensions, ImageCroppedEvent, ImageTransform } from '../../../image-crop/interfaces';

@Component({
  selector: 'asw-image-upload-dialog',
  templateUrl: './image-upload-dialog.component.html'
})
export class ImageUploadDialogComponent implements OnInit {

    constants: any = Constants;
    aswImageCropForm: FormGroup;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    canvasRotation = 0;
    rotation = 0;
    scale = 1;
    showCropper = false;
    containWithinAspectRatio = false;
    transform: ImageTransform = {};

    constructor(private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ImageUploadDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public control: any) { }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded() {
        this.showCropper = true;
        console.log('Image loaded');
    }

    cropperReady(sourceImageDimensions: Dimensions) {
        console.log('Cropper ready', sourceImageDimensions);
    }

    loadImageFailed() {
        console.log('Load failed');
    }

    rotateLeft() {
        this.canvasRotation--;
        this.flipAfterRotate();
    }

    rotateRight() {
        this.canvasRotation++;
        this.flipAfterRotate();
    }

    private flipAfterRotate() {
        const flippedH = this.transform.flipH;
        const flippedV = this.transform.flipV;
        this.transform = {
            ...this.transform,
            flipH: flippedV,
            flipV: flippedH
        };
    }


    flipHorizontal() {
        this.transform = {
            ...this.transform,
            flipH: !this.transform.flipH
        };
    }

    flipVertical() {
        this.transform = {
            ...this.transform,
            flipV: !this.transform.flipV
        };
    }

    resetImage() {
        this.scale = 1;
        this.rotation = 0;
        this.canvasRotation = 0;
        this.transform = {};
    }

    zoomOut() {
        this.scale -= .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    zoomIn() {
        this.scale += .1;
        this.transform = {
            ...this.transform,
            scale: this.scale
        };
    }

    toggleContainWithinAspectRatio() {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
    }

    updateRotation() {
        this.transform = {
            ...this.transform,
            rotate: this.rotation
        };
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    validateFormBuilder(): void {
        this.aswImageCropForm = this.formBuilder.group({
            file: [null]
        });
    }

    ngOnInit() {
        this.validateFormBuilder();
        this.editProperty(this.control);
        this.croppedImage = this.control.imageUrl;
        this.imageChangedEvent = this.control.event;
    }

    editProperty(control: any): void {
        this.aswImageCropForm.setValue({
            file: control.imageUrl
        });
    }

    onSubmit() {
        if (this.aswImageCropForm.invalid){
            return;
        }
        this.aswImageCropForm.value['displayName'] = this.control.displayName;
        this.aswImageCropForm.value['controlType'] = this.control.controlType;
        this.aswImageCropForm.value['label'] = this.control.label;
        this.aswImageCropForm.value['imageUrl'] = this.croppedImage;
        this.aswImageCropForm.value['event'] = this.imageChangedEvent;
        this.dialogRef.close(this.aswImageCropForm.value);
    }
}