/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { StyleControl } from '@asoftwareworld/form-builder/form-control/core';

export interface CalculationControl extends StyleControl {
    controlType?: string;
    tooltip: string;
    label: string;
    customClass?: string;
    value: string;
    column?: string;
    placeholder: string;
    operations: Operation[];
}

export interface Operation {
    id: string;
    label: string;
    value: number;
    operationValue: string;
    control: any;
}
