/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Control } from './control';

export interface ControlOption extends Control {
    options: [
        {
            key: string,
            value: string
        }
    ];
}
