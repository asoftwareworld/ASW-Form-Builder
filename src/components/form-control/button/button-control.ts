/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control } from '@asoftwareworld/form-builder/form-control/core';

export interface ButtonControl extends Control {
    color: string;
    type: string;
    column?: string;
    style: string;
}
