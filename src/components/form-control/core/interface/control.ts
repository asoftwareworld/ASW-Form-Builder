/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
export interface Control {
    icon: string;
    displayName: string;
    controlType: string;
    name: string;
    tooltip: string;
    value: string;
    type: string;
    label: string;
    style: string;
    isRequired: boolean;
    maxlength: number;
}
