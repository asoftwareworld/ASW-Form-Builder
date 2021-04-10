/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './textbox-demo.component.html'
})
export class TextboxDemoComponent implements OnInit {
    title = 'ASW-Form-Builder-demo';
    username: any = {};
    firstname: any = {};

    ngOnInit(): void {
        this.username = USERNAME;
        this.firstname = FIRSTNAME;
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

