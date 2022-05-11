/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control, ControlOption, StyleControl } from '@asoftwareworld/form-builder/form-control/core';

export interface MultiSelectControl extends Control, StyleControl {
    value: string[];
    options: ControlOption[];
    column?: string;
}
