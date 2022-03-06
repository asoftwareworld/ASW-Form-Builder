/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control, ControlOption } from '@asoftwareworld/form-builder/form-control/core';

export interface RadioButtonControl extends Control {
    value: string;
    options: ControlOption[];
    column?: string;
}
