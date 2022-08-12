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

    previewTemplate(data: any): void {
        this.aswSettingsService.previewData = data;
        this.router.navigate(['preview-template']);
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

