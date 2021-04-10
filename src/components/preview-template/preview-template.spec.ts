/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AswPreviewTemplate } from './preview-template';

describe('AswPreviewTemplate', () => {
    let component: AswPreviewTemplate;
    let fixture: ComponentFixture<AswPreviewTemplate>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AswPreviewTemplate]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AswPreviewTemplate);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
