/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { AswQrcodeErrorCorrectionLevel } from '@asoftwareworld/qrcode';

export interface QrCodeControl {
    centerImageSize?: string | number;
    centerImage?: string;
    qrCodeSize?: number;
    errorCorrectionLevel: AswQrcodeErrorCorrectionLevel;
    column: string;
    value: string;
    controlType?: string;
}
