/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, Input } from '@angular/core';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';


@Component({
    selector: 'asw-preview-template',
    templateUrl: './preview-template.html'
})
export class AswPreviewTemplate {
    constants: any = Constants;
    @Input() formContainer: any[] = [];

    updatedControl(data: any): void {
        this.formContainer.splice(data.index, 1, data.control);
    }
}
