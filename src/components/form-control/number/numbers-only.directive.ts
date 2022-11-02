/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[aswNumbersOnly]'
})
export class AswNumberDirective {
    // tslint:disable-next-line:no-input-rename
    @Input('decimals') decimals = 0;
    // tslint:disable-next-line:no-input-rename
    @Input('negative') negative = 0;

    private checkAllowNegative(value: string): any {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^-?\d+$/));
        } else {
            const regExpString =
                '^-?\\s*((\\d+(\\.\\d{0,' +
                this.decimals +
                '})?)|((\\d*(\\.\\d{1,' +
                this.decimals +
                '}))))\\s*$';
            return String(value).match(new RegExp(regExpString));
        }
    }

    private check(value: string): any {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
        } else {
            const regExpString =
                '^\\s*((\\d+(\\.\\d{0,' +
                this.decimals +
                '})?)|((\\d*(\\.\\d{1,' +
                this.decimals +
                '}))))\\s*$';
            return String(value).match(new RegExp(regExpString));
        }
    }

    private run(oldValue: any): void {
        setTimeout(() => {
            const currentValue: string = this.el.nativeElement.value;
            const allowNegative = this.negative > 0 ? true : false;

            if (allowNegative) {
                if (
                    !['', '-'].includes(currentValue) &&
                    !this.checkAllowNegative(currentValue)
                ) {
                    this.el.nativeElement.value = oldValue;
                }
            } else {
                if (currentValue !== '' && !this.check(currentValue)) {
                    this.el.nativeElement.value = oldValue;
                }
            }
        });
    }

    constructor(private el: ElementRef) { }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this.run(this.el.nativeElement.value);
    }

    @HostListener('paste', ['$event'])
    onPaste(event: ClipboardEvent): void {
        this.run(this.el.nativeElement.value);
    }
}
