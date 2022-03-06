/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { map, startWith } from 'rxjs/operators';
import { GoogleMapService } from './google-map.service';
import { GpsControl } from './gps-control';

@Component({
    selector: 'asw-gps-dialog',
    templateUrl: './gps-dialog.html'
})
export class AswGpsDialog implements OnInit {
    constants: any = Constants;
    aswEditGpsForm!: FormGroup;
    status!: boolean;
    filteredAddress: any;
    searchedAddress: any[] = [];
    constructor(
        private formBuilder: FormBuilder,
        private googleMapService: GoogleMapService,
        public dialogRef: MatDialogRef<AswGpsDialog>,
        @Inject(MAT_DIALOG_DATA) public control: any) {
    }

    async ngOnInit(): Promise<void> {
        this.validateFormBuilder();
        this.searchedAddress = await this.googleMapService.getNearestAddress();
        this.editProperty(this.control);
        this.aswEditGpsForm.get('value')?.valueChanges.pipe(
            startWith(''),
            map(address => (address)),
        ).subscribe(async address => {
            if (address) {
                if (address.length < 50) {
                    this.searchedAddress = await this.googleMapService.getQueryPredictions(address);
                }
                if (this.searchedAddress.length === 0) {
                    const isValidSearch = this.googleMapService.isLetter(address);
                    if (isValidSearch) {
                        const lat = address.split(',')[0].trim();
                        const lng = address.split(',')[1].trim();
                        this.searchedAddress = await this.googleMapService.getAddress(Number(lat), Number(lng));
                    } else {
                        this.searchedAddress = [];
                        this.aswEditGpsForm.get('value')?.setErrors({ searchAddress: true });
                    }
                }
                this.filteredAddress = this.searchedAddress;
            } else {
                this.filteredAddress = this.searchedAddress;
            }
        });
    }

    validateFormBuilder(): void {
        this.aswEditGpsForm = this.formBuilder.group({
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
            name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
            latitude: ['', []],
            longitude: ['', []],
            value: ['', []],
            style: ['', [Validators.required]],
            column: [''],
            isRequired: [false]
        });
    }

    editProperty(control: GpsControl): void {
        this.aswEditGpsForm.setValue({
            latitude: control.latitude,
            longitude: control.longitude,
            value: control.value,
            tooltip: control.tooltip,
            label: control.label,
            name: control.name,
            column: control.column,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        if (this.aswEditGpsForm.invalid) {
            return;
        }
        this.aswEditGpsForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditGpsForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }

    async searchAddress(searchedText: MatAutocompleteSelectedEvent): Promise<void> {
        let selectedAddress = this.searchedAddress.find(x => x.label === searchedText.option.value);
        if (!selectedAddress?.latitude && !selectedAddress?.longitude) {
            selectedAddress = await this.googleMapService.getDetails(selectedAddress);
        }
        this.aswEditGpsForm.patchValue({
            latitude: selectedAddress.latitude,
            longitude: selectedAddress.longitude,
        });
    }
}
