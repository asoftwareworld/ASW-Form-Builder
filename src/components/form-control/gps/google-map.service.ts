/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Injectable } from '@angular/core';
declare const google: any;

@Injectable({
    providedIn: 'root'
})
export class GoogleMapService {
    autocompleteService: any;
    private geoCoder: any;
    searchedAddress: any[] = [];
    latitude!: number;
    longitude!: number;
    placesService: any;

    setCurrentLocation(): void {
        this.geoCoder = new google.maps.Geocoder();
        this.latitude = 31.67431470650697;
        this.longitude = 75.64344802329514;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude ? position.coords.latitude : 31.67431470650697;
                this.longitude = position.coords.longitude ? position.coords.longitude : 75.64344802329514;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }

    getNearestAddress(): Promise<any> {
        this.placesService = new google.maps.places.PlacesService(document.createElement('div'));
        this.setCurrentLocation();
        const nearestAddress: any[] = [];
        return new Promise((resolve, reject) => {
            const userLocation = new google.maps.LatLng(this.latitude, this.longitude);
            const request = {
                location: userLocation,
                radius: 1500,
                types: ['establishment'],
                rankby: 'distance'
            };
            this.placesService.nearbySearch(
                request,
                (options: any[], status: any) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        options.map(element =>  {
                            const address = {
                                id: element.place_id,
                                label: element.name + ', ' + element.vicinity,
                                alias: element.name,
                                addressName: element.vicinity,
                                latitude: element.geometry.location.lat(),
                                longitude: element.geometry.location.lng(),
                                icon: 'https://maps.gstatic.com/consumer/images/icons/2x/place_grey650.png'
                            };
                            nearestAddress.push(address);
                        });
                        this.searchedAddress = nearestAddress;
                        resolve(this.searchedAddress);
                    } else {
                        reject(status);
                    }
                });
        }).then();
    }

    getQueryPredictions(query: string): Promise<any> {
        this.autocompleteService = new google.maps.places.AutocompleteService();
        const request = {
            input: query
        };
        let resultAddress: any[] = [];
        return new Promise((resolve, reject) => {
            this.autocompleteService.getQueryPredictions(request, (options: any[], status: any) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && options.length > 0) {
                    options.map(element => {
                        const address = {
                            id: element.place_id,
                            label: element.structured_formatting.main_text + ', ' + element.structured_formatting.secondary_text,
                            alias: element.structured_formatting.main_text,
                            addressName: element.structured_formatting.secondary_text,
                            icon: 'https://maps.gstatic.com/consumer/images/icons/2x/place_grey650.png'
                        };
                        resultAddress.push(address);
                    });
                    this.searchedAddress = resultAddress;
                    resolve(this.searchedAddress);
                }
                else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    resultAddress = [];
                    resolve(resultAddress);
                }
            });
        }).then();
    }

    getAddress(latitude: number, longitude: number): Promise<any> {
        this.geoCoder = new google.maps.Geocoder();
        this.searchedAddress = [];
        return new Promise((resolve, reject) => {
            this.geoCoder.geocode({
                location: {
                    lat: latitude,
                    lng: longitude
                }
            }, (results: any[], status: string) => {
                if (status === google.maps.GeocoderStatus.OK) {
                    const element = results[0];
                    const address = {
                        id: element.place_id,
                        label: element.formatted_address,
                        alias: element.formatted_address,
                        addressName: element.formatted_address,
                        icon: 'https://maps.gstatic.com/consumer/images/icons/2x/place_grey650.png',
                        latitude,
                        longitude,
                    };
                    this.searchedAddress.push(address);
                    resolve(this.searchedAddress);
                } else {
                    reject(status);
                }
            });
        }).then();
    }

    getDetails(data: any): Promise<any> {
        let lat;
        let lng;
        return new Promise((resolve, reject) => {
            this.placesService.getDetails({ placeId: data.id, fields: ['geometry', 'icon'] },
                (details: { geometry: { location: { lat: () => any; lng: () => any; }; }; icon: any; }, status: any) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        lat = details.geometry.location.lat();
                        lng = details.geometry.location.lng();
                        const address = {
                            id: data.id,
                            label: data.label,
                            alias: data.alias,
                            addressName: data.addressName,
                            latitude: lat,
                            longitude: lng,
                            icon: data.icon
                        };
                        resolve(address);
                    } else {
                        reject(status);
                    }
                });
        }).then();
    }

    isLetter(value: string): boolean {
        const letters = /[a-z A-Z]/g;
        if (value && value.match(letters)) {
            return false;
        }
        return true;
    }
}
