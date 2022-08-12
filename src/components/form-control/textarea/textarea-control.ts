/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control, ControlLength, StyleControl } from '@asoftwareworld/form-builder/form-control/core';

export interface TextareaControl extends Control, ControlLength, StyleControl {
    pattern?: string;
    customErrorMsg?: string;
    value: string;
    column?: string;
}
