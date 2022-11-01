/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AswSettingsService } from 'src/demo/shared/service/asw-setting-service';

@Component({
    selector: 'asw-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    title = 'ASW-Form-Builder-demo';
    jsonData: any[] = [];
    jsonData1: any[] = [];
    username: any = {};
    firstname: any = {};
    isShowPreviewButton = true;
    isShowJsonDataButton = true;
    isShowPublishButton = true;

    constructor(
        private aswSettingsService: AswSettingsService,
        private router: Router) {

    }

    ngOnInit(): void {
        this.username = USERNAME;
        this.firstname = FIRSTNAME;
        this.jsonData = this.aswSettingsService.previewData;
       // this.getJson();
    }

    saveJsonData(data: any): void {
        console.log(data);
    }

    getJson(): void {
        this.aswSettingsService.getJSON().subscribe(result => {
            if (result) {
                this.jsonData1 = result;
            }
        });
    }

    importData(): void {
        const data = [{
            id: 'EXPORT_MACHINE(IITASALS000250)_PARAMETER(Disco lato #3 (B) Forza (kN))',
            value: 71.5
        }, {
            id: 'EXPORT_MACHINE(IITASALS000250)_PARAMETER(Ruota 1 lato # A Posizione (mm))',
            value: 454
        }];
        this.jsonData1.forEach((control) => {
            if (control.id === data[0].id) {
                console.log(control);
                control.value = data[0].value;
            } else if (control.id === data[1].id) {
                control.value = data[1].value;
            }
        });
    }

    previewTemplate(data: any): void {
        this.aswSettingsService.previewData = data;
        this.router.navigate(['preview-template']);
    }

    buttonClick(data: any): void {
        console.log(data);
    }

    onSelectionChange(control: any): void {
        console.log(control);
    }
}

const USERNAME: any =
{
    name: 'Username',
    tooltip: 'Enter Username',
    value: '',
    type: 'text',
    label: 'Username',
    style: 'outline',
    isRequired: true,
    maxlength: 50
};

const FIRSTNAME: any =
{
    name: 'Firstname',
    tooltip: 'Enter Firstname',
    value: '',
    type: 'text',
    label: 'Firstname',
    style: 'outline',
    isRequired: true,
    maxlength: 50
};

