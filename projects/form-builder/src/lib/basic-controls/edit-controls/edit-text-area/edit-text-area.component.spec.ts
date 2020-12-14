import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditTextAreaComponent } from './edit-text-area.component';

describe('EditTextAreaComponent', () => {
  let component: EditTextAreaComponent;
  let fixture: ComponentFixture<EditTextAreaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
