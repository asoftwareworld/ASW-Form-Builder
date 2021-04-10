/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, OnInit } from '@angular/core';
import { AswSettingsService } from 'src/demo/shared/service/asw-setting-service';

@Component({
    selector: 'asw-preview',
    templateUrl: './preview-template.component.html'
})
export class PreviewTemplateComponent implements OnInit {
    title = 'ASW-Form-Builder-demo';
    jsonData: any[] = [];
    constructor(private aswSettingsService: AswSettingsService) {

    }
    ngOnInit(): void {
        this.jsonData = this.aswSettingsService.previewData;
    }
}
