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
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditButtonComponent } from '../../edit-controls/edit-button/edit-button.component';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;
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
                ButtonComponent
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
        fixture = TestBed.createComponent(ButtonComponent);
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

    it('should open the ConfirmDialogComponent in a MatDialog', () => {
        const controlIndex = 1;
        spyOn(component.dialog, 'open').and.callThrough();
        component.deleteButtonDialog(control, controlIndex);
        expect(component.dialog.open).toHaveBeenCalledWith(ConfirmDialogComponent, {
            width: '350px',
            data: { name: control.name, message: constants.waringMessage }
        });
    });
});
