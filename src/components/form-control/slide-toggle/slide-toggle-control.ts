/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export interface SlideToggleControl {
    controlType: string;
    label: string;
    color: string;
    isRequired: boolean;
    column?: string;
    value: boolean;
}
