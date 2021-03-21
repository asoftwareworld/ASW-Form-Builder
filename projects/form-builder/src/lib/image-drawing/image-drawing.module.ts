/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageDrawingComponent } from './image-drawing.component';

@NgModule({
    declarations: [
        ImageDrawingComponent
    ],
    exports: [
        ImageDrawingComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class ImageDrawingModule {}
