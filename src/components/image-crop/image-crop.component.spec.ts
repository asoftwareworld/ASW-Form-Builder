/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageCropComponent } from './image-crop.component';

describe('ImageCropComponent', () => {
    let component: ImageCropComponent;
    let fixture: ComponentFixture<ImageCropComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [ImageCropComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageCropComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
