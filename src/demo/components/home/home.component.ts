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
    jsonData1: any[] = [
        {
            label: 'User Profile ',
            subtype: 'h2',
            column: 'col-md-12',
            style: 'text-left',
            controlType: 'header'
        },
        {
            tooltip: 'Enter firstname',
            label: 'Firstname',
            name: 'firstname',
            value: '',
            style: 'outline',
            column: 'col-md-4',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter middle name',
            label: 'Middle name',
            name: 'middlename',
            value: '',
            style: 'outline',
            column: 'col-md-4',
            maxlength: 50,
            minlength: 0,
            isRequired: false,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter lastname',
            label: 'Lastname',
            name: 'lastname',
            value: '',
            style: 'outline',
            column: 'col-md-4',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter username',
            label: 'Username',
            name: 'username',
            value: '',
            style: 'outline',
            column: 'col-md-6',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter email address',
            label: 'Email Address',
            name: 'address',
            value: '',
            style: 'outline',
            column: 'col-md-6',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter phone number',
            label: 'Phone number',
            name: 'phonenumber',
            value: '',
            style: 'outline',
            column: 'col-md-12',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter country',
            label: 'Country',
            name: 'country',
            value: '',
            style: 'outline',
            column: 'col-md-4',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter state',
            label: 'State',
            name: 'state',
            value: '',
            style: 'outline',
            column: 'col-md-4',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter city',
            label: 'City',
            name: 'city',
            value: '',
            style: 'outline',
            column: 'col-md-4',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textbox'
        },
        {
            tooltip: 'Enter address',
            label: 'Address',
            name: 'address',
            value: '',
            style: 'outline',
            column: 'col-md-12',
            maxlength: 50,
            minlength: 0,
            isRequired: true,
            controlType: 'textarea'
        },
        {
            tooltip: 'Click Save',
            label: 'Save',
            name: 'Save',
            type: 'button',
            color: 'primary',
            style: 'mat-raised-button',
            isRequired: false,
            controlType: 'button'
        }
    ];
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
    }

    saveJsonData(data: any): void {
        console.log(data);
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

