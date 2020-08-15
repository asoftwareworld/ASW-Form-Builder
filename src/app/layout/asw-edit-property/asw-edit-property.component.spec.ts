import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AswEditPropertyComponent } from './asw-edit-property.component';

describe('AswEditPropertyComponent', () => {
  let component: AswEditPropertyComponent;
  let fixture: ComponentFixture<AswEditPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AswEditPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AswEditPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
