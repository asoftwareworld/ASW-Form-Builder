import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextBoxComponent } from './edit-text-box.component';

describe('EditTextBoxComponent', () => {
  let component: EditTextBoxComponent;
  let fixture: ComponentFixture<EditTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
