import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectPropertyComponent } from './multi-select-property.component';

describe('MultiSelectPropertyComponent', () => {
  let component: MultiSelectPropertyComponent;
  let fixture: ComponentFixture<MultiSelectPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectPropertyComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
