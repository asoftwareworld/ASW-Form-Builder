/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ControlOption } from './../interface/control-option';

export class ObjectUtils {
    public static keyPressNumbersWithDecimal(event: any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode !== 46 && charCode > 31
            && (charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        }
        return true;
    }

    public static resetForm(formContainer: any[]): any[] {
        formContainer.forEach(control => {
            control.value = '';
            if (control.controlType === 'select'
                || control.controlType === 'multi-select'
                || control.controlType === 'radio'
                || control.controlType === 'checkbox'
                || control.controlType === 'autocomplete') {
                control.options.forEach((option: ControlOption) => {
                    option.isChecked = false;
                });
            }
        });
        return formContainer;
    }

    public static validateForm(formContainer: any[]): any {
        let isFormValid = true;
        const data = formContainer.filter(x => x.isRequired);
        const labels: string[] = [];
        data.forEach(control => {
            if (!control.value?.length) {
                isFormValid = false;
                labels.push(' ' + control.label);
            }
        });
        return {isFormValid, labels};
    }
}
