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
import { Constants, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';
import { NumberControl } from '@asoftwareworld/form-builder/form-control/number';
import { CalculationControl } from './calculation-control';
import { AswCalculationDialog } from './calculation-dialog';

@Component({
    selector: 'asw-calculation',
    templateUrl: './calculation.html'
})
export class AswCalculation {

    constants: any = Constants;
    /**
     * Calculation control
     */
    @Input() control: CalculationControl | null = null;
    @Input() formControls: any[] = [];

    /**
     * Calculation control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;

    @Input() isPreviewTemplate = false;

    @Output() calculationUpdateEvent = new EventEmitter<{ control: CalculationControl, index: number }>();
    @Output() calculationDeleteEvent = new EventEmitter<number>();
    @Output() aswModelChange = new EventEmitter<CalculationControl>();
    @Output() duplicateControl = new EventEmitter<CalculationControl>();

    constructor(public dialog: MatDialog) {
    }

    deleteCalculationDialog(control: CalculationControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.calculationDeleteEvent.emit(controlIndex);
            }
        });
    }

    editCalculationDialog(control: CalculationControl, formControls: any[], controlIndex: number): void {
        const numberControls = formControls.filter(x => x.controlType === 'number');
        if (!numberControls.length) {
            control.operations = [];
        }
        if (!control.operations.length) {
            numberControls.forEach((x, index) => {
                control.operations.push(this.setControloperations(x, index));
            });
        } else {
            control.operations.map((operation, index) => {
                const numberControl = numberControls.find(element => element.guid === operation.id);
                if (numberControl) {
                    const updatedOperation = {
                        id: numberControl.guid,
                        label: numberControl.label,
                        value: numberControl.value,
                        operationValue: operation.operationValue,
                        control: numberControl
                    };
                    control.operations.splice(index, 1, updatedOperation);
                }
            });
        }

        const dialogRef = this.dialog.open(AswCalculationDialog, {
            disableClose: true,
            width: '744px',
            data: { control, numberControls }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                result.value = ObjectUtils.calculateValue(result.operations).toString();
                this.calculationUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    private setControloperations(control: NumberControl, index: number): any {
        const operation = {
            id: control.guid,
            label: control.label,
            value: control.value,
            operationValue: index === 0 ? '' : '+',
            control
        };
        return operation;
    }

    onChange(control: CalculationControl): void {
        this.aswModelChange.emit(control);
    }

    duplicateCalculationControl(control: CalculationControl): void {
        this.duplicateControl.emit(control);
    }
}
