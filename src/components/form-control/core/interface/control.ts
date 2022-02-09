/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
export interface Control {
    controlType?: string;
    name: string;
    tooltip: string;
    label: string;
    style: 'legacy' | 'standard' | 'fill' | 'outline';
    isRequired: boolean;
}
