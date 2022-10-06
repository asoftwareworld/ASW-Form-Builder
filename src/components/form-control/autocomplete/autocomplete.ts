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
import { AswSingleSelectDialog, Constants, ControlOption } from '@asoftwareworld/form-builder/form-control/core';
import { AutoCompleteControl } from './autocomplete-control';

@Component({
    selector: 'asw-autocomplete',
    templateUrl: './autocomplete.html'
})
export class AswAutocomplete implements OnInit {
    constants: any = Constants;
    filteredOptions!: ControlOption[] | undefined;

    /**
     * Autocomplete control
     */
    @Input() control: AutoCompleteControl | null = null;

    /**
     * Autocomplete control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() autocompleteUpdateEvent = new EventEmitter<{ control: AutoCompleteControl, index: number }>();
    @Output() autocompleteDeleteEvent = new EventEmitter<number>();
    @Output() selectionChange = new EventEmitter<AutoCompleteControl>();
    @Output() duplicateControl = new EventEmitter<AutoCompleteControl>();

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
        this.filteredOptions = this.control?.options;
    }

    filter(control: AutoCompleteControl): ControlOption[] | undefined {
        if (control.value) {
            const filterValue = control.value.toLowerCase();
            control.options.forEach(element => {
                element.isChecked = control.value === element.key ? true : false;
            });
            this.selectionChange.emit(control);
            return this.control?.options.filter(option => option.value.toLowerCase().startsWith(filterValue));
        }
        return this.control?.options;
    }

    /**
     * Delete autocomplete control based on control index
     * @param control autocomplete control items
     * @param controlIndex autocomplete control index
     */
    deleteAutocompleteDialog(control: AutoCompleteControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.autocompleteDeleteEvent.emit(controlIndex);
            }
        });
    }

    editAutocompleteDialog(control: AutoCompleteControl, controlIndex: number): void {
        control.options.forEach(element => {
            element.isChecked = control.value === element.key ? true : false;
        });
        const dialogRef = this.dialog.open(AswSingleSelectDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.autocompleteUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    duplicateAutocompleteControl(control: AutoCompleteControl): void {
        this.duplicateControl.emit(control);
    }
}
