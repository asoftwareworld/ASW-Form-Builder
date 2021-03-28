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
import { AswConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { AswButtonComponent } from './button.component';

describe('AswButtonComponent', () => {
    let component: AswButtonComponent;
    let fixture: ComponentFixture<AswButtonComponent>;
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
                AswButtonComponent
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
        fixture = TestBed.createComponent(AswButtonComponent);
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

    it('should open the AswConfirmDialogComponent in a MatDialog', () => {
        const controlIndex = 1;
        spyOn(component.dialog, 'open').and.callThrough();
        component.deleteButtonDialog(control, controlIndex);
        expect(component.dialog.open).toHaveBeenCalledWith(AswConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: constants.waringMessage }
        });
    });
});
