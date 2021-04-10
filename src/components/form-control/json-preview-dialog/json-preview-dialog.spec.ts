/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ClipboardModule } from '@angular/cdk/clipboard';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AswJsonPreviewDialog } from './json-preview-dialog';

describe('AswJsonPreviewDialog', () => {
    let component: AswJsonPreviewDialog;
    let fixture: ComponentFixture<AswJsonPreviewDialog>;
    const data: any = [
        {
            icon: 'title',
            displayName: 'Header',
            controlType: 'header',
            subtype: 'h1',
            style: 'text-left',
            label: 'Header'
        }
    ];
    const mockDialogRef = {
        close: () => { }
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AswJsonPreviewDialog
            ],
            imports: [
                MatButtonModule,
                MatDialogModule,
                ClipboardModule
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: mockDialogRef }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AswJsonPreviewDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('No calls onNoClick()', () => {
        spyOn(component, 'onNoClick');
        fixture.detectChanges();
        const button = fixture.debugElement.nativeElement.querySelector('#closeDialog');
        button.click();
        expect(button.textContent).toContain('Close');
        expect(component.onNoClick).toHaveBeenCalled();
    });

    it('Yes calls onYesClick()', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#copyData');
        expect(button.textContent).toContain('Copy Data');
    });

    it('dialog should be closed after onNoClick()', () => {
        const spy = spyOn(component.dialogRef, 'close').and.callThrough();
        component.onNoClick();
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
    });

    it('dialog should be shows json data', () => {
        // const previewData = fixture.debugElement.nativeElement.querySelector('#jsonPreviewContent');
        const button = fixture.debugElement.nativeElement.querySelector('#copyData');
        expect(button.textContent).toContain('Copy Data');
        // expect(previewData.textContent).toEqual(data);
    });
});
