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
    disabled!: boolean;
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
            await this.searchAddressFromExitingData(address);
        });
    }

    validateFormBuilder(): void {
        this.aswEditGpsForm = this.formBuilder.group({
            id: ['', [Validators.required]],
            customClass: [],
            tooltip: ['', []],
            label: ['', [Validators.required, Validators.minLength(2)]],
            latitude: ['', []],
            longitude: ['', []],
            value: ['', []],
            style: ['', [Validators.required]],
            column: [''],
            isRequired: [false],
            isDisabled: [false]
        });
    }

    editProperty(control: GpsControl): void {
        this.aswEditGpsForm.setValue({
            id: control.id,
            customClass: control.customClass ?? '',
            latitude: control.latitude,
            longitude: control.longitude,
            value: control.value ?? '',
            tooltip: control.tooltip,
            label: control.label,
            column: control.column,
            style: control.style,
            isRequired: control.isRequired,
            isDisabled: control.isDisabled ?? false
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

    onStatusChange(event: any): void {
        this.status = event.checked ? true : false;
    }

    onChange(event: any): void {
        this.disabled = event.checked ? true : false;
    }

    private async searchAddressFromExitingData(address: string): Promise<void> {
        const filteredAddress = this.searchedAddress.find(x => x.label === address);
        if (filteredAddress) {
            await this.selectedAddress(filteredAddress);
        } else {
            await this.getAddressFromGoogleApi(address);
        }
    }

    private async selectedAddress(filteredAddress: any): Promise<void> {
        if (!filteredAddress?.latitude && !filteredAddress?.longitude) {
            filteredAddress = await this.googleMapService.getDetails(filteredAddress);
        }
        this.aswEditGpsForm.patchValue({
            latitude: filteredAddress.latitude,
            longitude: filteredAddress.longitude,
        });
    }

    async getAddressFromGoogleApi(address: string): Promise<void> {
        if (address) {
            this.searchedAddress = await this.googleMapService.getQueryPredictions(address);
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
    }
}
