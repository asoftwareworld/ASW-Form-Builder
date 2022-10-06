/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export interface FileUploadControl {
    id: string;
    controlType?: string;
    isRequired: boolean;
    value: File[];
    column?: string;
}

export interface File {
    progress: number;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
