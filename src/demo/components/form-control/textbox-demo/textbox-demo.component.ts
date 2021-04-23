/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnInit } from '@angular/core';
import { TextboxControl } from '@asoftwareworld/form-builder/form-control/textbox';

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

const USERNAME: TextboxControl =
{
    controlType: '',
    name: 'Username',
    tooltip: 'Enter Username',
    value: '',
    label: 'Username',
    style: 'outline',
    isRequired: true,
    maxlength: 50,
    minlength: 0
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

