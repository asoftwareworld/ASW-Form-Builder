import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AswFormBuilderComponent } from './asw-form-builder.component';

describe('AswFormBuilderComponent', () => {
  let component: AswFormBuilderComponent;
  let fixture: ComponentFixture<AswFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AswFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AswFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
