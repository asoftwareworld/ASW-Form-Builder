/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'asw-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'material-demo';
    jsonData: any[] = [];
    username: any = {};
    firstname: any = {};

    ngOnInit(): void {
        this.username = USERNAME;
        this.firstname = FIRSTNAME;
    }

    saveJsonData(data: any): void {
        console.log(data);
    }

    previewTemplate(data: any): void {
        this.jsonData = data;
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

