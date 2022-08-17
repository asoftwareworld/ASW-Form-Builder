/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control, ControlLength, StyleControl } from '@asoftwareworld/form-builder/form-control/core';

export interface NumberControl extends Control, ControlLength, StyleControl {
    value: string;
    column?: string;
    guid?: string;
}
