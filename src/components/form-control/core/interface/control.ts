/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
export interface Control {
    id: string;
    controlType?: string;
    tooltip: string;
    label: string;
    isRequired: boolean;
    customClass?: string;
}

export interface StyleControl {
    style: 'legacy' | 'standard' | 'fill' | 'outline';
}
