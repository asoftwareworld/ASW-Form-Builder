/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ImageTransform } from './image-transform.interface';

export interface CropperOptions {
    format: OutputFormat;
    maintainAspectRatio: boolean;
    transform: ImageTransform;
    aspectRatio: number;
    resizeToWidth: number;
    resizeToHeight: number;
    cropperMinWidth: number;
    cropperMinHeight: number;
    cropperMaxHeight: number;
    cropperMaxWidth: number;
    cropperStaticWidth: number;
    cropperStaticHeight: number;
    canvasRotation: number;
    initialStepSize: number;
    roundCropper: boolean;
    onlyScaleDown: boolean;
    imageQuality: number;
    autoCrop: boolean;
    backgroundColor: string;
    containWithinAspectRatio: boolean;
    hideResizeSquares: boolean;
    alignImage: 'left' | 'center';
}

export type OutputFormat = 'png' | 'jpeg' | 'bmp' | 'webp' | 'ico';
