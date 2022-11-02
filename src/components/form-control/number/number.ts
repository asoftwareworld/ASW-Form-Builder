/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';
import { NumberControl } from './number-control';
import { AswNumberDialog } from './number-dialog';

@Component({
    selector: 'asw-number',
    templateUrl: './number.html'
})
export class AswNumber implements OnInit, AfterViewInit {

    constants: any = Constants;
    objectUtils = ObjectUtils;
    decimals = 100;
    /**
     * Number control
     */
    @Input() control: NumberControl | null = null;
    @Input() formControls: any[] = [];
    /**
     * Number control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;

    @Input() isPreviewTemplate = false;

    @Output() numberUpdateEvent = new EventEmitter<{ control: NumberControl, index: number }>();
    @Output() numberDeleteEvent = new EventEmitter<number>();
    @Output() aswModelChange = new EventEmitter<NumberControl>();
    @Output() duplicateControl = new EventEmitter<NumberControl>();

    @ViewChild('input') input: any;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
        // tslint:disable-next-line:no-bitwise
        const id = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        if (this.control) {
            this.control.guid = this.control.guid ? this.control.guid : id;
        }
    }

    ngAfterViewInit(): void {
        this.input.valueChanges.subscribe(() => {
            this.onChange(this.control ? this.control : null as any);
        });
    }

    deleteNumberDialog(control: NumberControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.numberDeleteEvent.emit(controlIndex);
            }
        });
    }

    editNumberDialog(control: NumberControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswNumberDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.numberUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    onChange(control: NumberControl): void {
        const calculationControls = this.formControls.filter(x => x.controlType === 'calculation');
        calculationControls.forEach(calculation => {
            const updateControls = calculation.operations.filter((x: any) => x.id === control.guid);
            updateControls.forEach((y: any) => {
                y.label = control.label;
                y.value = control.value;
            });
            calculation.value = this.objectUtils.calculateValue(calculation.operations);
        });

        this.aswModelChange.emit(control);
    }

    duplicateNumberControl(control: NumberControl): void {
        this.duplicateControl.emit(control);
    }
}
