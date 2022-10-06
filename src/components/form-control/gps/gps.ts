/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { GoogleMapService } from './google-map.service';
import { GpsControl } from './gps-control';
import { AswGpsDialog } from './gps-dialog';


@Component({
    selector: 'asw-gps',
    templateUrl: './gps.html'
})
export class AswGps implements OnInit {

    searchedAddress: any[] = [];
    filteredAddress: any;
    constants: any = Constants;
    @ViewChild('input') gpsForm!: HTMLFormElement;
    /**
     * Button control
     */
    @Input() control: GpsControl | null = null;

    /**
     * Button control index to help update or delete gps from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() gpsUpdateEvent = new EventEmitter<{ control: GpsControl, index: number }>();
    @Output() gpsDeleteEvent = new EventEmitter<number>();
    @Output() gpsAddressChange = new EventEmitter<GpsControl>();
    @Output() duplicateControl = new EventEmitter<GpsControl>();

    constructor(
        public dialog: MatDialog,
        private googleMapService: GoogleMapService) { }

    async ngOnInit(): Promise<void> {
        if (this.control?.latitude && this.control.longitude && !this.control.value) {
            const searchedAddress = await this.googleMapService.getAddress(Number(this.control?.latitude), Number(this.control.longitude));
            this.control.value = searchedAddress[0].label;
        }
        this.searchedAddress = await this.googleMapService.getNearestAddress();
        this.filteredAddress = this.searchedAddress;
    }

    /**
     * Delete gps control based on control index
     * @param control gps control items
     * @param controlIndex gps control index
     */
    deleteGpsDialog(control: GpsControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.controlType, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.gpsDeleteEvent.emit(controlIndex);
            }
        });
    }

    editGpsDialog(control: GpsControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswGpsDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.gpsUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }

    async onChange(address: string, control: GpsControl): Promise<void> {
        const filteredAddress = this.searchedAddress.find(x => x.label === address);
        if (filteredAddress) {
            await this.selectedAddress(filteredAddress);
        } else {
            await this.getAddressFromGoogleApi(address);
        }
        this.gpsAddressChange.emit(control);
    }

    private async selectedAddress(filteredAddress: any): Promise<void> {
        if (!filteredAddress?.latitude && !filteredAddress?.longitude) {
            filteredAddress = await this.googleMapService.getDetails(filteredAddress);
        }
        if (this.control) {
            this.control.latitude = filteredAddress.latitude;
            this.control.longitude = filteredAddress.longitude;
            this.control.value = filteredAddress.label;
        }
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
                    this.gpsForm.control.setErrors({ searchAddress: true });
                }
            }
            this.filteredAddress = this.searchedAddress;
        } else {
            this.filteredAddress = this.searchedAddress;
        }
    }

    duplicateGpsControl(control: GpsControl): void {
        this.duplicateControl.emit(control);
    }
}
