import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxPropertyComponent } from './text-box-property.component';

describe('TextBoxPropertyComponent', () => {
  let component: TextBoxPropertyComponent;
  let fixture: ComponentFixture<TextBoxPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
