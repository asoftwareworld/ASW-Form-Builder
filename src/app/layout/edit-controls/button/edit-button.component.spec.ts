import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPropertyComponent } from './button-property.component';

describe('ButtonPropertyComponent', () => {
  let component: ButtonPropertyComponent;
  let fixture: ComponentFixture<ButtonPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
