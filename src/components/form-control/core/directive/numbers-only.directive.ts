/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: 'input[aswNumbersOnly]'
})
export class AswNumberDirective {

    constructor(private element: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange(event: any): void {
        const initalValue = this.element.nativeElement.value;
        this.element.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this.element.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
