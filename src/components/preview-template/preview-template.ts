/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants, NotificationService, ObjectUtils } from '@asoftwareworld/form-builder/form-control/core';

@Component({
    selector: 'asw-preview-template',
    templateUrl: './preview-template.html'
})
export class AswPreviewTemplate {
    constants: any = Constants;
    @Input() formContainer: any[] = [];
    @Output() buttonClick = new EventEmitter<any[]>();
    @Output() aswModelChange = new EventEmitter<any>();

    constructor(
        private notificationService: NotificationService) {
    }
    updatedControl(data: any): void {
        this.formContainer.splice(data.index, 1, data.control);
    }

    buttonClicked(type: string): void {
        if (type === 'reset') {
            this.formContainer = ObjectUtils.resetForm(this.formContainer);
        } else {
            const data = ObjectUtils.validateForm(this.formContainer);
            if (!data.isFormValid) {
                this.notificationService.openNotification('Please fill in the following required fields.'
                    + ' \n \n' + data.labels.toString(), 'Close');
            } else {
                this.buttonClick.emit(this.formContainer);
            }
        }
    }

    onSelectionChange(control: any): void {
        this.aswModelChange.emit(control);
    }
}
