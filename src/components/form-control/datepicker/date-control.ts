/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control, StyleControl } from '@asoftwareworld/form-builder/form-control/core';

export interface DateControl extends Control, StyleControl {
    value: string;
    column?: string;
    minDate?: Date;
    maxDate?: Date;
}
