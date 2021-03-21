/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { Dimensions } from './dimensions.interface';
import { ExifTransform } from './exif-transform.interface';

export interface LoadedImage {
    original: {
        base64: string;
        image: HTMLImageElement;
        size: Dimensions;
    };
    transformed: {
        base64: string;
        image: HTMLImageElement;
        size: Dimensions;
    };
    exifTransform: ExifTransform;
}
