/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AswConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { AswButton } from './button';

describe('AswButton', () => {
    let component: AswButton;
    let fixture: ComponentFixture<AswButton>;
    // For query the DOM
    let debugElement: DebugElement;

    const control: any = {
        icon: 'touch_app',
        displayName: 'Button',
        controlType: 'button',
        name: 'button',
        tooltip: 'Click button',
        label: 'Button',
        type: 'button',
        color: 'primary',
        style: 'mat-raised-button',
        isRequired: false
    };

    const constants = {
        waringMessage: 'Are you sure you want to remove this field?'
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AswButton
            ],
            imports: [
                CommonModule,
                MatDialogModule,
                MatTooltipModule
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AswButton);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should display the button', () => {
        // setup input binding
        component.control = control;
        // detech SetupChanges
        fixture.detectChanges();
    });

    it('should open the AswConfirmDialog in a MatDialog', () => {
        const controlIndex = 1;
        spyOn(component.dialog, 'open').and.callThrough();
        component.deleteButtonDialog(control, controlIndex);
        expect(component.dialog.open).toHaveBeenCalledWith(AswConfirmDialog, {
            width: '350px',
            data: { name: control.name, message: constants.waringMessage }
        });
    });
});
