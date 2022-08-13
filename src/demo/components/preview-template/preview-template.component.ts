/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnChanges, OnInit } from '@angular/core';
import { AswSettingsService } from 'src/demo/shared/service/asw-setting-service';

@Component({
    selector: 'asw-preview',
    templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent implements OnInit, OnChanges {
    title = 'ASW-Form-Builder-demo';
    jsonData: any[] = [];
    constructor(private aswSettingsService: AswSettingsService) {

    }
    ngOnInit(): void {
        this.jsonData = this.aswSettingsService.previewData;
    }
    ngOnChanges(): void {
        this.aswSettingsService.previewData = this.jsonData;
    }

    buttonClick(data: any): void {
        console.log(data);
    }

    onSelectionChange(control: any): void {
        console.log(control);
    }
}
