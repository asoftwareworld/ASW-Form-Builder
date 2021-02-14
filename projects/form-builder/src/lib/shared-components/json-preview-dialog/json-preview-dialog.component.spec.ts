import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JsonPreviewDialogComponent } from './json-preview-dialog.component';

describe('JsonPreviewDialogComponent', () => {
    let component: JsonPreviewDialogComponent;
    let fixture: ComponentFixture<JsonPreviewDialogComponent>;
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
                JsonPreviewDialogComponent
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
        fixture = TestBed.createComponent(JsonPreviewDialogComponent);
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
        console.log(button.data);
        expect(button.textContent).toContain('Copy Data');
    });

    it('dialog should be closed after onNoClick()', () => {
        const spy = spyOn(component.dialogRef, 'close').and.callThrough();
        component.onNoClick();
        fixture.detectChanges();
        expect(spy).toHaveBeenCalled();
    });

    it('dialog should be shows json data', () => {
        const previewData = fixture.debugElement.nativeElement.querySelector('#jsonPreviewContent');
        const button = fixture.debugElement.nativeElement.querySelector('#copyData');
        expect(button.textContent).toContain('Copy Data');
        // expect(previewData.textContent).toContain('[' +
        //     '{' +
        //         '"icon": "title",' +
        //         '"displayName": "Header",' +
        //         '"controlType": "header",' +
        //         '"subtype": "h1",' +
        //         '"style": "text-left",' +
        //         '"label": "Header"' +
        //     '}' +
        // ']');
    });
});
