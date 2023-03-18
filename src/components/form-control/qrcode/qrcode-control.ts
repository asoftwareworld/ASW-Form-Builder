/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Density, LogoStyle } from '@asoftwareworld/qrcode';

export interface QrCodeControl {
    id?: string;
    guid?: string;
    column: string;
    value: string;
    controlType?: string;
    displayName: string;
    height?: number;
    width?: number;
    logo?: string;
    outerMargin?: number;
    density?: Density;
    logoStyle?: LogoStyle;
}
