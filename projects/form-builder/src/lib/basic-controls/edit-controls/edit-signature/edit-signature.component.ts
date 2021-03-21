/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, Input, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';

@Component({
    selector: 'asw-edit-signature',
    templateUrl: './edit-signature.component.html',
    styles: [`
  canvas {
    border: 1px solid #000;
  }
  span {
    width: 300px;
  }
  `]
})
export class EditSignatureComponent implements AfterViewInit {

    @Input() name: string;
    @ViewChild('sigPad') sigPad: ElementRef;
    sigPadElement;
    context;
    isDrawing = false;
    img;

    constructor(public dialogRef: MatDialogRef<EditSignatureComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngAfterViewInit(): void {
        this.sigPadElement = this.sigPad.nativeElement;
        this.context = this.sigPadElement.getContext('2d');
        this.context.strokeStyle = '#3742fa';
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(aswEditPropertyForm: NgForm): void {
        if (aswEditPropertyForm.invalid) {
            return;
        }
        // this.model.displayName = this.control.displayName;
        // this.model.controlType = this.control.controlType;
        // this.model.name = this.name;
        // this.model.label = this.label;
        // this.model.tooltip = this.tooltip;
        // if (this.control.controlType !== 'radio' || this.control.controlType !== 'checkbox') {
        //     this.model.style = this.style;
        // }
        // this.model.isRequired = this.isRequired;
        // this.model.options = this.options;
        // this.dialogRef.close(this.model);
    }



    @HostListener('document:mouseup', ['$event'])
    onMouseUp(e): void {
        this.isDrawing = false;
    }

    onMouseDown(e): void {
        this.isDrawing = true;
        const coords = this.relativeCoords(e);
        this.context.moveTo(coords.x, coords.y);
    }

    onMouseMove(e): void {
        if (this.isDrawing) {
            const coords = this.relativeCoords(e);
            this.context.lineTo(coords.x, coords.y);
            this.context.stroke();
        }
    }

    private relativeCoords(event): any {
        const bounds = event.target.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        return { x, y };
    }

    clear(): void {
        this.context.clearRect(0, 0, this.sigPadElement.width, this.sigPadElement.height);
        this.context.beginPath();
    }

    save(): void {
        this.img = this.sigPadElement.toDataURL('image/png');
    }
}
