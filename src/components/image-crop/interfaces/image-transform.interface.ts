/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export interface ImageTransform {
    scale?: number;
    rotate?: number;
    flipH?: boolean;
    flipV?: boolean;
    translateH?: number;
    translateV?: number;
}
