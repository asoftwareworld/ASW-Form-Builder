/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export interface MoveStart {
    active: boolean;
    type: MoveTypes | null;
    position: string | null;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    clientX: number;
    clientY: number;
}

export enum MoveTypes {
    Move = 'move',
    Resize = 'resize',
    Pinch = 'pinch'
}
