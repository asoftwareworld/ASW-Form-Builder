/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AswConfirmDialog } from './confirm-dialog';

describe('AswConfirmDialog', () => {
    let component: AswConfirmDialog;
    let fixture: ComponentFixture<AswConfirmDialog>;
    const data: any = {
        name: 'Textbox',
        message: 'Are you sure you want to remove this field?'
    };
    const mockDialogRef = {
        close: () => { }
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AswConfirmDialog
            ],
            imports: [
                MatButtonModule,
                MatDialogModule
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: mockDialogRef }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AswConfirmDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('No calls onNoClick()', () => {
        spyOn(component, 'onNoClick');
        fixture.detectChanges();
        const button = fixture.debugElement.nativeElement.querySelector('#no');
        button.click();
        expect(button.textContent).toContain('No');
        expect(component.onNoClick).toHaveBeenCalled();
    });

    // it('should close the component if yes is clicked', () => {
    //     spyOn(component.dialogRef, 'close').and.callThrough();
    //     // page.cancelButton.click();
    //     expect(mockDialogRef.close).toHaveBeenCalled();
    // });

    it('dialog should be closed after onNoClick()', () => {
        const spy = spyOn(component.dialogRef, 'close').and.callThrough();
        component.onNoClick();
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
    });

    it('dialog should be shows title', () => {
        const paragraph = fixture.debugElement.nativeElement.querySelector('#confirmDialogContent');
        const h1 = fixture.debugElement.nativeElement.querySelector('#confirmDialogTitle');
        const button = fixture.debugElement.nativeElement.querySelector('#yes');
        expect(button.textContent).toContain('Yes');
        expect(paragraph.textContent).toContain('Are you sure you want to remove this field?');
        expect(h1.textContent).toBe('Warning!');
    });
});
