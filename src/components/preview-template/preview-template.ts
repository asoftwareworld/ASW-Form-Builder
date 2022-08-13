/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants, NotificationService } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-preview-template',
    templateUrl: './preview-template.html'
})
export class AswPreviewTemplate {
    constants: any = Constants;
    @Input() formContainer: any[] = [];
    @Output() buttonClick = new EventEmitter<any[]>();
    @Output() aswModelChange = new EventEmitter<any>();
    isFormValid = true;

    constructor(
        public notificationService: NotificationService) {
    }
    updatedControl(data: any): void {
        this.formContainer.splice(data.index, 1, data.control);
    }

    buttonClicked(): void {
        this.isFormValid = true;
        const data = this.formContainer.filter(x => x.isRequired);
        const labels: string[] = [];
        data.forEach(control => {
            if (!control.value?.length) {
                this.isFormValid = false;
                labels.push(' ' + control.label);
            }
        });
        if (!this.isFormValid) {
            this.notificationService.openNotification('Please fill in the following required fields.' + ' \n \n' + labels.toString(), 'Close');
        } else {
            this.buttonClick.emit(this.formContainer);
        }
    }

    onSelectionChange(control: any): void {
        this.aswModelChange.emit(control);
    }
}
