import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { PreviewTemplateComponent } from './preview-template.component';

describe('PreviewTemplateComponent', () => {
  let component: PreviewTemplateComponent;
  let fixture: ComponentFixture<PreviewTemplateComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
