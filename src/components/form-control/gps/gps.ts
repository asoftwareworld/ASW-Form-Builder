/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { map, startWith } from 'rxjs/operators';
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

    constructor(
        public dialog: MatDialog,
        private googleMapService: GoogleMapService) { }

    async ngOnInit(): Promise<void> {
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
            data: { name: control.label, message: this.constants.messages.waringMessage }
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

    async searchAddress(searchedText: MatAutocompleteSelectedEvent): Promise<void> {
        let selectedAddress = this.searchedAddress.find(x => x.label === searchedText.option.value);
        if (!selectedAddress?.latitude && !selectedAddress?.longitude) {
            selectedAddress = await this.googleMapService.getDetails(selectedAddress);
        }
        if (this.control) {
            this.control.latitude = selectedAddress.latitude;
            this.control.longitude = selectedAddress.longitude;
            this.control.value = selectedAddress.label;
        }
    }

    async onChange(searchText: string): Promise<void> {
        if (searchText) {
            this.searchedAddress = await this.googleMapService.getPlacePredictions(searchText);
            if (this.searchedAddress.length === 0) {
                const isValidSearch = this.googleMapService.isLetter(searchText);
                if (isValidSearch) {
                    const lat = searchText.split(',')[0].trim();
                    const lng = searchText.split(',')[1].trim();
                    this.searchedAddress = await this.googleMapService.getAddress(Number(lat), Number(lng));
                } else {
                    this.searchedAddress = [];
                }

            }
            this.filteredAddress = this.searchedAddress;
        } else {
            this.filteredAddress = this.searchedAddress;
        }
    }
}
