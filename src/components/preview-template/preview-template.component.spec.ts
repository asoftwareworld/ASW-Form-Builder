/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewTemplateComponent } from './preview-template.component';

describe('PreviewTemplateComponent', () => {
    let component: PreviewTemplateComponent;
    let fixture: ComponentFixture<PreviewTemplateComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PreviewTemplateComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PreviewTemplateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
