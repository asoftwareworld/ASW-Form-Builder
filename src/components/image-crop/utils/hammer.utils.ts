/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

export type HammerStatic = new(element: HTMLElement | SVGElement, options?: any) => HammerManager;

/** @docs-private */
export interface HammerManager {
    get(eventName: string): HammerManager;
    set(options: any): HammerManager;
    on(eventName: string, handler: (ev: any) => any): any;
}
