import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmationDialogComponent', () => {
    let component: ConfirmDialogComponent;
    let fixture: ComponentFixture<ConfirmDialogComponent>;
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
                ConfirmDialogComponent
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
        fixture = TestBed.createComponent(ConfirmDialogComponent);
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

    it('Yes calls onYesClick()', () => {
        const button = fixture.debugElement.nativeElement.querySelector('#yes');
        console.log(button.data);
        expect(button.textContent).toContain('Yes');
    });

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
